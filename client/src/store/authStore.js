
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '../utils/api';

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAdmin: false,
      role: null,

      setAuth: ({ user, token, expirationDate }) => {
        set({
          user,
          token,
          expirationDate,
        });
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
      },

      login: async (email, password) => {

        try {
          const response = await api.post('/auth/login', { email, password });
          // console.log(response.data)
          const { token, userId, role, isAdmin, expiresIn } = response.data;

          const expirationDate = new Date(new Date().getTime() + expiresIn * 1000).toISOString();

          set({
            user: { userId, role, isAdmin },
            token,
            expirationDate,
          });
          localStorage.setItem('token', token);
          localStorage.setItem('expirationDate', expirationDate);

          return response;
        } catch (error) {
          // console.error('Login failed:', error.response?.data?.message || error.message);
          return error.response;
        }
      },

      signup: async (data) => {
        try {
          const response = await api.post('/auth/signup', data);
          //console.log('User created:', response.data.message);
          return response;
        } catch (error) {
          // console.error('Signup failed:', error.response?.data?.message || error.message);
          return error.response;
        }
      },

      tryLogin: () => {
        const { user } = get();
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expirationDate');
        
        if (!token || new Date() > new Date(expirationDate)) {
          get().logout();
          return;
        }

        set({ user, token });
      },

      logout: () => {
        set({ user: null, token: null, expirationDate: null });
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        expirationDate: state.expirationDate,
      }),
    }
  )
);

export default useAuthStore;
