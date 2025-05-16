import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Orders from './pages/admin/Orders';
import ProductManagement from './pages/admin/ProductManagement';
import Login from './pages/Login';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-orange-600">
        <div className="text-center">
          <img 
            src="/images/logo.png" 
            alt="Bitewala" 
            className="w-41 mx-auto mb-4 animate-pulse"
          />
          <p className="text-white font-poppins">Loading amazing taste...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="login" element={<Login />} />
            </Route>
            
            {/* Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="orders" element={<Orders />} />
              <Route path="products" element={<ProductManagement />} />
            </Route>
            
            {/* 404 Page */}

          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;