import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart2, 
  LogOut, 
  Menu, 
  X, 
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { logout } = useAuth();

  const navItems = [
    { 
      path: '/admin', 
      name: 'Dashboard', 
      icon: <LayoutDashboard className="h-5 w-5" /> 
    },
    { 
      path: '/admin/orders', 
      name: 'Orders', 
      icon: <ShoppingCart className="h-5 w-5" /> 
    },
    { 
      path: '/admin/products', 
      name: 'Products', 
      icon: <Package className="h-5 w-5" /> 
    },
    { 
      path: '/admin/customers', 
      name: 'Customers', 
      icon: <Users className="h-5 w-5" /> 
    },
    { 
      path: '/admin/reports', 
      name: 'Reports', 
      icon: <BarChart2 className="h-5 w-5" /> 
    }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col md:flex-row">
      {/* Sidebar - Mobile */}
      <div className="md:hidden bg-white shadow-md z-30 flex items-center justify-between p-4">
        <div className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="Bitewala" 
            className="h-8"
          />
          <span className="ml-2 font-bold">Admin</span>
        </div>
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-md bg-neutral-100 text-neutral-700"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <motion.aside 
        className={`fixed md:relative inset-y-0 left-0 w-64 bg-neutral-900 text-white shadow-lg flex flex-col z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 border-b border-neutral-700 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/images/logo-white.png" 
              alt="Bitewala" 
              className="h-8"
            />
            <span className="ml-2 font-bold">Admin</span>
          </div>
          <button 
            onClick={toggleSidebar}
            className="md:hidden p-1 rounded-md text-neutral-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-grow py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/admin'}
                  className={({ isActive }) => `
                    flex items-center px-4 py-3 text-sm
                    ${isActive 
                      ? 'bg-primary-600 text-white' 
                      : 'text-neutral-300 hover:bg-neutral-800'}
                  `}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <span className="inline-flex items-center justify-center mr-3">
                    {item.icon}
                  </span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-neutral-700">
          <Link 
            to="/"
            className="flex items-center text-sm text-neutral-300 hover:text-white mb-3"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            View Site
          </Link>
          <button 
            onClick={logout}
            className="flex items-center w-full px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 rounded-md"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-grow md:ml-64 flex flex-col">
        <div className="flex-grow p-6">
          <Outlet />
        </div>
        <footer className="bg-white p-4 text-center text-sm text-neutral-500 border-t">
          &copy; {new Date().getFullYear()} Bitewala Admin. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default AdminLayout;