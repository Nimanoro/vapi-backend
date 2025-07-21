// pages/Clinics.jsx
export default function Clinics() {
    const clinics = [
      { name: 'North Van Medical', phone: '+1 (604) 123-4567' },
      { name: 'Downtown Wellness', phone: '+1 (604) 987-6543' }
    ];
  
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Clinics</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            + Add Clinic
          </button>
        </div>
  
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 text-left">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clinics.map((clinic, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-6 py-3">{clinic.name}</td>
                  <td className="px-6 py-3">{clinic.phone}</td>
                  <td className="px-6 py-3">
                    <button className="text-blue-600 hover:underline mr-2">Edit</button>
                    <button className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  