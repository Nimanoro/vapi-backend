// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Calls from './pages/Calls';
import Clinics from './pages/Clinics';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

function Admin() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default Admin;
