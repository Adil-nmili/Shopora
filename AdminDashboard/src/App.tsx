import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layouts/DashboardLayout';
import Dashboard from './components/pages/Dashboard';
import Products from './components/pages/Products';
import Orders from './components/pages/Orders';
import Users from './components/pages/Users';
import Promos from './components/pages/Promos';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
          <Route path="/promos" element={<Promos />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;