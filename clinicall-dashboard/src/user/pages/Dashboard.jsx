// pages/Dashboard.jsx
export default function Dashboard() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">Total Calls</p>
            <p className="text-2xl font-bold">128</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">Active Clinics</p>
            <p className="text-2xl font-bold">4</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">AI Agents Live</p>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
  
        <div className="bg-white p-4 rounded-lg shadow mt-6">
          <h3 className="text-lg font-semibold mb-2">Recent Calls</h3>
          <p className="text-gray-400 text-sm">Coming soon: recent call activity</p>
        </div>
      </div>
    );
  }
  