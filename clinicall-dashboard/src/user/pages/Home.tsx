import { motion } from 'framer-motion';
import { BarChart, Clock3, DollarSign, PhoneCall } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

export default function Home() {
  const dailyCalls = 30;
  const deflectionRate = 0.7;
  const avgCallDuration = 2.5;
  const hourlyWage = 25;

  const deflectedCalls = dailyCalls * deflectionRate;
  const minutesSavedPerDay = deflectedCalls * avgCallDuration;
  const hoursSavedPerMonth = (minutesSavedPerDay / 60) * 22;
  const moneySavedPerMonth = hoursSavedPerMonth * hourlyWage;

  const stats = [
    { label: 'Calls Answered by AI', value: `${Math.round(deflectedCalls)} / day`, icon: PhoneCall },
    { label: 'Time Saved Daily', value: `${Math.round(minutesSavedPerDay)} mins`, icon: Clock3 },
    { label: 'Monthly Staff Hours Saved', value: `${Math.round(hoursSavedPerMonth)} hrs`, icon: BarChart },
    { label: 'Estimated Monthly Savings', value: `$${Math.round(moneySavedPerMonth).toLocaleString()}`, icon: DollarSign, highlight: true },
  ];

  const totalCallsPerDay = Array.from({ length: 30 }, () => Math.floor(Math.random() * 21) + 30); // 50–70 calls/day
  const deflectionRates = Array.from({ length: 30 }, () => Math.random() * 0.2 + 0.5); // 50%–70% deflection
  const deflectedCallsPerDay = totalCallsPerDay.map((calls, i) => Math.round(calls * deflectionRates[i]));

  const chartData = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Total Calls Received',
        data: totalCallsPerDay,
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderDash: [5, 5],
        tension: 0.3,
      },
      {
        label: 'Calls Deflected by AI',
        data: deflectedCallsPerDay,
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6">
      <motion.h1 className="text-3xl font-bold mb-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        Welcome to Clinicall
      </motion.h1>

      <motion.p className="text-gray-600 mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        Here’s a real-time snapshot of your clinic’s AI performance.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <StatBox key={i} {...stat} delay={i * 0.1} />
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
        <h2 className="text-lg font-semibold mb-4">📊 Call Deflection Trend (Last 30 Days)</h2>
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <LiveStatus active={3} ai={2} human={1} />
        <SummaryCard label="Total Calls Today" value="64" />
        <SummaryCard label="Handled by AI" value="46" />
        <SummaryCard label="Transferred to Staff" value="18" />
      </div>

      <div className="bg-blue-50 p-6 border border-blue-300 rounded-xl text-blue-900">
        <h2 className="text-lg font-semibold mb-2">🧠 Optimization Tip</h2>
        <p className="text-sm">
          To maximize your AI's efficiency, ensure your FAQs are up-to-date and leverage our training tools to improve
          response accuracy.
        </p>
      </div>
    </div>
  );
}

function StatBox({ label, value, icon: Icon, highlight = false, delay = 0 }) {
  return (
    <motion.div
      className={`rounded-xl p-5 border ${
        highlight ? 'bg-green-50 border-green-400 text-green-700 font-semibold' : 'bg-white shadow-sm'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="flex items-center gap-3">
        <Icon className={`w-6 h-6 ${highlight ? 'text-green-600' : 'text-gray-500'}`} />
        <p className="text-sm text-gray-600">{label}</p>
      </div>
      <p className="text-2xl mt-2">{value}</p>
    </motion.div>
  );
}

function LiveStatus({ active, ai, human }) {
  return (
    <div className="bg-gray-50 p-5 rounded-lg border">
      <h2 className="text-lg font-semibold mb-2">Live Status</h2>
      <p className="text-gray-800 mb-1"> {active} Active Calls</p>
      <p className="text-gray-700"> {ai} with AI | {human} routed to staff</p>
    </div>
  );
}

function SummaryCard({ label, value }) {
  return (
    <div className="bg-white border rounded-lg p-5 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
    </div>
  );
}
