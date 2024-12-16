import { create } from 'zustand';
import { User } from '@supabase/supabase-js';
import type { LoginFormData, SignupFormData } from '../lib/validators';
import * as authService from '../lib/auth';

interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (data: LoginFormData) => Promise<void>;
  signUp: (data: SignupFormData) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  checkUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  signIn: async (data) => {
    try {
      const { user } = await authService.signInWithEmail(data);
      set({ user });
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  },
  signUp: async (data) => {
    try {
      const { user } = await authService.signUpWithEmail(data);
      set({ user });
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  },
  signInWithGoogle: async () => {
    try {
      await authService.signInWithGoogle();
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  },
  signOut: async () => {
    try {
      await authService.signOut();
      set({ user: null });
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  },
  checkUser: async () => {
    try {
      const user = await authService.getCurrentUser();
      set({ user, loading: false });
    } catch (error) {
      console.error('Error checking user:', error);
      set({ user: null, loading: false });
    }
  },
}));