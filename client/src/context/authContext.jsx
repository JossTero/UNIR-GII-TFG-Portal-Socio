import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  loginRequest,
  logoutRequest,
  registerRequest,
  verifyTokenRequest,
} from '../apis/authAPI';
import { VISUAL_CONSTANTS } from '../config/constants';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(
      "La funcioanlidad de 'useAuth' debe usarse dentro de un 'AuthProvider'"
    );
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const login = async (data) => {
    try {
      const res = await loginRequest(data);
      if (res.status === 'success') {
        setUser(res.userStored);
        setIsAuthenticated(true);
      } else {
        const data = [res];
        setErrors(data);
      }
    } catch (error) {
      const data = [{ message: error }];
      setErrors(data);
    }
  };

  const register = async (user) => {
    let res = null;
    try {
      res = await registerRequest(user);
      if (res.status === 'success') {
        setUser(res.userStored);
        setIsAuthenticated(true);
      } else {
        setErrors([{ message: res.message }]);
      }
    } catch (error) {
      setErrors([{ message: error }]);
    }
    return res;
  };

  const logout = async () => {
    try {
      const res = await logoutRequest(user);
      if (res.status === 'success') {
        Cookies.remove('token');
        localStorage.clear();
        setUser(null);
        setLoading(false);
        setIsAuthenticated(false);
        setErrors([]);
      } else {
        const data = [res];
        setErrors(data);
      }
    } catch (error) {
      const data = [{ message: error }];
      setErrors(data);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    const checkToken = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setUser(null);
        setLoading(false);
        return setIsAuthenticated(false);
      }
      try {
        const res = await verifyTokenRequest();
        if (res.status !== 'success' || !res.userStored) {
          setUser(null);
          setLoading(false);
          return setIsAuthenticated(false);
        }
        setUser(res.userStored);
        setLoading(false);
        return setIsAuthenticated(true);
      } catch (error) {
        setUser(null);
        setLoading(false);
        return setIsAuthenticated(false);
      }
    };
    checkToken();
  }, []);

  // Limpiar errores después de 5 segundos
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, VISUAL_CONSTANTS.time_errors);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated,
        loading,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
