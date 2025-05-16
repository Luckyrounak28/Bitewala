import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LockKeyhole, Mail } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(email, password);
      
      if (success) {
        navigate('/');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <div className="text-center mb-8">
              <img 
                src="/images/logo.png" 
                alt="Bitewala" 
                className="h-16 mx-auto mb-4" 
              />
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-neutral-600">Sign in to your account</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-error-50 text-error-700 rounded-md text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input pl-10"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <p className="mt-2 text-xs text-neutral-500">Use admin@bitewala.com for admin access</p>
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <LockKeyhole className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input pl-10"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <p className="mt-2 text-xs text-neutral-500">Use admin123 for admin access</p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`btn-primary w-full ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;