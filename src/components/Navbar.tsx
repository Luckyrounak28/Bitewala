import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, ShoppingCart, User, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center h-16"> 
  <img 
    src="/images/logo.png" 
    alt="Bitewala" 
    className="h-12 md:h-14 lg:h-16 w-auto object-contain" 
  />
</Link>



          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  font-medium text-base transition duration-150 ease-in-out
                  ${scrolled 
                    ? (isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600') 
                    : (isActive ? 'text-white font-semibold' : 'text-white hover:text-secondary-300')}
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/cart" 
              className={`relative p-2 rounded-full ${
                scrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <ShoppingCart className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="relative group">
                <button 
                  className={`flex items-center space-x-1 p-2 rounded-full ${
                    scrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
                  }`}
                >
                  <User className="h-6 w-6" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {isAdmin && (
                    <Link 
                      to="/admin" 
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/login" 
                className={`font-medium ${
                  scrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-secondary-300'
                }`}
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link 
              to="/cart" 
              className={`relative p-2 rounded-full ${
                scrolled ? 'text-neutral-700' : 'text-white'
              }`}
            >
              <ShoppingCart className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                scrolled ? 'text-neutral-700' : 'text-white'
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  block px-3 py-2 rounded-md text-base font-medium ${
                    isActive 
                      ? 'bg-primary-50 text-primary-600' 
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }
                `}
              >
                {link.name}
              </NavLink>
            ))}
            
            {isAuthenticated ? (
              <>
                {isAdmin && (
                  <Link 
                    to="/admin" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:bg-neutral-100"
                  >
                    Admin Dashboard
                  </Link>
                )}
                <button 
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:bg-neutral-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:bg-neutral-100"
              >
                Login
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;