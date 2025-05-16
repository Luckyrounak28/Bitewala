import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock user data for demo purposes
const MOCK_USERS = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@bitewala.com',
    password: 'admin123',
    role: 'admin' as const
  },
  {
    id: '2',
    name: 'Test User',
    email: 'user@example.com',
    password: 'user123',
    role: 'user' as const
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // For demo purposes, we're using mock authentication
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const matchedUser = MOCK_USERS.find(
        u => u.email === email && u.password === password
      );
      
      if (matchedUser) {
        const { password, ...userWithoutPassword } = matchedUser;
        setUser(userWithoutPassword);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated,
    isAdmin,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};