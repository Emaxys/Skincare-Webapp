import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { FormInput } from '../ui/FormInput';
import { AuthDivider } from './AuthDivider';
import { Notification } from '../ui/Notification';
import { loginSchema, type LoginFormData } from '../../lib/validators';

export function LoginForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useAuthStore();
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [showNotification, setShowNotification] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const message = location.state?.message;
  const returnTo = location.state?.returnTo;

  useEffect(() => {
    if (message) {
      setShowNotification(true);
    }
  }, [message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = loginSchema.parse(formData);
      await signIn(validatedData);
      if (returnTo) {
        navigate(returnTo);
      } else {
        navigate('/');
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrors({ email: error.message });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errors[e.target.name as keyof LoginFormData]) {
      setErrors(prev => ({
        ...prev,
        [e.target.name]: undefined
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Notification
        message={message || "Please sign in to continue"}
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />
      
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md animate-fadeIn">
        <div>
          <h2 className="mt-6 text-center text-3xl font-serif text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-gray-900 dark:text-white hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <FormInput
              label="Email address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Sign in
            </button>
          </div>
        </form>

        <AuthDivider />

        <button
          onClick={signInWithGoogle}
          className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="h-5 w-5 mr-2" />
          Google
        </button>
      </div>
    </div>
  );
}