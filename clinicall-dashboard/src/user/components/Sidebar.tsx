// user/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import {
  Home,
  PhoneCall,
  Sliders,
  User
} from 'lucide-react';

const navItems = [
  { to: '/home', icon: <Home className="w-5 h-5" />, label: 'Home' },
  { to: '/calls', icon: <PhoneCall className="w-5 h-5" />, label: 'Calls' },
  { to: '/preferences', icon: <Sliders className="w-5 h-5" />, label: 'Preferences' },
  { to: '/profile', icon: <User className="w-5 h-5" />, label: 'Profile' },
];

export default function Sidebar() {
  return (
    <div className="w-60 bg-white border-r text-sm p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-10 px-2">Clinicall</h2>
      <nav className="space-y-2">
        {navItems.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md font-medium hover:bg-gray-100 ${
                isActive ? 'bg-gray-200 text-blue-600' : 'text-gray-700'
              }`
            }
          >
            {icon}
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
