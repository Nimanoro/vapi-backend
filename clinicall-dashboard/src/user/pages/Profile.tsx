import { useState } from 'react';

export default function Profile() {
  const [formData, setFormData] = useState({
    clinicName: 'North Van Medical',
    contactEmail: 'reception@northvanclinic.ca',
    phoneNumber: '(604) 555-1234',
    address: '123 Main St, North Vancouver, BC',
    hours: 'Mon–Fri: 9:00am – 5:00pm',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔧 Submit logic (API call or toast)
    console.log('Updated clinic profile:', formData);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Clinic Profile</h1>
      <p className="text-gray-600 mb-6">Manage your clinic’s contact information, address, and hours of operation.</p>

      <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
        <div>
          <label className="block text-sm font-medium text-gray-700">Clinic Name</label>
          <input
            type="text"
            name="clinicName"
            value={formData.clinicName}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Business Hours</label>
          <input
            type="text"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
