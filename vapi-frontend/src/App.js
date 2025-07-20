import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [variation, setVariation] = useState('default');
  const [phone, setPhone] = useState('');
  const [response, setResponse] = useState(null);

  const startCall = async () => {
    try {
      const res = await axios.post('http://localhost:3000/start-call', {
        variation,
        phone,
      });
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: err.message });
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Start a Vapi Call</h1>
      <select onChange={(e) => setVariation(e.target.value)}>
        <option value="default">Default</option>
        <option value="north_van">North Van</option>
        <option value="persian">Persian</option>
      </select>
      <br /><br />
      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br /><br />
      <button onClick={startCall}>Start Call</button>

      {response && (
        <pre style={{ marginTop: '2rem', color: 'green' }}>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
