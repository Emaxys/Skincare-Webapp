import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export function useAuthCheck() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const checkAuthAndProceed = (callback: () => void) => {
    if (!user) {
      navigate('/login', { 
        state: { 
          message: 'Please sign in to proceed with payment',
          returnTo: window.location.pathname
        }
      });
      return false;
    }
    callback();
    return true;
  };

  return { checkAuthAndProceed };
}