// server.js (no SDK version)
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: ['http://localhost:3002', 'https://your-production-site.com'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Validate token
const VAPI_TOKEN = process.env.VAPI_API_TOKEN;
if (!VAPI_TOKEN) {
  console.error("❌ Missing VAPI_API_TOKEN in .env");
  process.exit(1);
}

const VAPI_BASE_URL = 'https://api.vapi.ai';
const HEADERS = {
  Authorization: `Bearer ${VAPI_TOKEN}`,
  'Content-Type': 'application/json'
};

// Agent configurations
const agents = {
  north_van: JSON.parse(fs.readFileSync('./northVanAgent.json', 'utf-8'))
};

// Create assistant
async function createAssistant(config) {
  try {
    const response = await axios.post(`${VAPI_BASE_URL}/assistant`, config, {
      headers: HEADERS
    });
    console.log('✅ Assistant created:', response.data.id);
    return response.data;
  } catch (error) {
    console.error('❌ Failed to create assistant:', error.response?.data || error.message);
    throw error;
  }
}

// Start outbound call
async function startCall(assistantId, phoneNumber) {
  try {
    const body = {
      assistantId: assistantId,
      customer : {
        number: phoneNumber
      },
      phoneNumberId:"72600ad1-f902-4311-9e37-07044e6a9c74"
      
    };
    const response = await axios.post(`${VAPI_BASE_URL}/call`, body, {
      headers: HEADERS
    });
    console.log('📞 Call started:', response.data.id);
    return response.data;
  } catch (error) {
    console.error('❌ Failed to start call:', error.response?.data || error.message);
    throw error;
  }
}

// POST /start-call
app.post('/start-call', async (req, res) => {
  const { variation, phone } = req.body;

  if (!variation || !phone) {
    return res.status(400).json({ success: false, error: 'Missing variation or phone number' });
  }

  const config = agents[variation];
  if (!config) {
    return res.status(400).json({ success: false, error: 'Unknown agent variation' });
  }

  try {
    const assistant = await createAssistant(config);
    const call = await startCall(assistant.id, phone);
    res.json({ success: true, call });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'clinicall-rest-backend' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Clinicall REST backend running on http://localhost:${PORT}`);
});
