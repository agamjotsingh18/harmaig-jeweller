// src/hooks/useAuth.js
import useAuthStore from '../store/authStore';
import { useEffect } from 'react';

const useAuth = () => {
  const { tryLogin, logout } = useAuthStore();

  useEffect(() => {
    tryLogin();
  }, [tryLogin]);

  return { logout };
};

export default useAuth;
