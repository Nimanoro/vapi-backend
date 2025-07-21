import { useState } from 'react';
import AdminApp from './admin/AdminApp';
import UserApp from './user/UserApp';

function App() {
  const [role, setRole] = useState('user'); // 'admin' or 'user'

  const toggleRole = () => {
    setRole(prev => (prev === 'admin' ? 'user' : 'admin'));
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleRole}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
        >
          Switch to {role === 'admin' ? 'User' : 'Admin'}
        </button>
      </div>

      {role === 'admin' ? <AdminApp /> : <UserApp />}
    </>
  );
}

export default App;
