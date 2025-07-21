// pages/Calls.jsx
export default function Calls() {
    const callData = [
      {
        clinic: 'North Van Medical',
        patient: '+1 (604) 555-1234',
        status: 'Completed',
        time: '2025-07-19 10:30 AM',
      },
      {
        clinic: 'Downtown Wellness',
        patient: '+1 (778) 444-9876',
        status: 'Missed',
        time: '2025-07-19 09:15 AM',
      },
    ];
  
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Calls</h2>
  
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 text-left">
              <tr>
                <th className="px-6 py-3">Clinic</th>
                <th className="px-6 py-3">Patient</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Time</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {callData.map((call, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-6 py-3">{call.clinic}</td>
                  <td className="px-6 py-3">{call.patient}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        call.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {call.status}
                    </span>
                  </td>
                  <td className="px-6 py-3">{call.time}</td>
                  <td className="px-6 py-3">
                    <button className="text-blue-600 hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  