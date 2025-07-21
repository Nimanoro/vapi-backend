// Header.jsx
export default function Header() {
    return (
      <header className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Admin Panel</h1>
        <div className="flex items-center gap-4">
          {/* Placeholder for clinic switcher & profile */}
          <span className="text-sm text-gray-600">demo@clinic.com</span>
        </div>
      </header>
    );
  }
  