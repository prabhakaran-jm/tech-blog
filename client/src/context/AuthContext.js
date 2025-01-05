import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        authService.getCurrentUser()
          .then(response => {
            setUser(response.data);
          })
          .catch(() => {
            localStorage.removeItem('token');
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    }, []);
  
    const login = (userData) => {
      setUser(userData.user);
      localStorage.setItem('token', userData.token);
    };
  
    const logout = () => {
      setUser(null);
      localStorage.removeItem('token');
    };
  
    return (
      <AuthContext.Provider value={{ user, login, logout, loading }}>
        {children}
      </AuthContext.Provider>
    );
  };
  

export const useAuth = () => useContext(AuthContext);
