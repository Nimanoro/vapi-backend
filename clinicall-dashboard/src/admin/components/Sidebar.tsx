// Sidebar.jsx
import { Calendar, PhoneCall, Settings, Building } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', icon: Calendar, href: '/dashboard' },
  { name: 'Calls', icon: PhoneCall, href: '/calls' },
  { name: 'Clinics', icon: Building, href: '/clinics' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
      <h2 className="text-2xl font-bold mb-6">Clinicall</h2>
      <nav className="space-y-2">
        {navItems.map(({ name, icon: Icon, href }) => (
          <Link key={href} to={href} className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 ${pathname === href ? 'bg-gray-200' : ''}`}>
            <Icon size={18} />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
