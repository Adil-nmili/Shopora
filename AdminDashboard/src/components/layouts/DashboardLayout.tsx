import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingCart, Package, Users, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navLinks = [
    { to: '/', text: 'Dashboard', icon: <Home className="h-5 w-5" /> },
    { to: '/products', text: 'Products', icon: <Package className="h-5 w-5" /> },
    { to: '/orders', text: 'Orders', icon: <ShoppingCart className="h-5 w-5" /> },
    { to: '/users', text: 'Users', icon: <Users className="h-5 w-5" /> },
    { to: '/promos', text: 'Promos', icon: <BarChart className="h-5 w-5" /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Shopora</h1>
        </div>
        <nav className="mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                location.pathname === link.to ? 'bg-gray-100 dark:bg-gray-700' : ''
              }`}
            >
              {link.icon}
              <span className="ml-4">{link.text}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Card>
          <CardContent className="p-6">
            {children}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DashboardLayout;
