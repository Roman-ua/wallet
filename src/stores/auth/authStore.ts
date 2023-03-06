import { create } from 'zustand';
import { authStoreInterface, User } from '@/stores/auth/interfaces';

const useAuthStore = create((set) => ({
  userData: {},
  authError: '',
  setUserData: (user: User) => set((state: authStoreInterface) => ({ ...state, userData: user })),
  setAuthError: (error: Error) =>
    set((state: authStoreInterface) => ({ ...state, authError: error }))
}));

export default useAuthStore;
