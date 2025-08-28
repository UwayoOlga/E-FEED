import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout.jsx';
import TextInput from '../../components/auth/TextInput.jsx';
import PasswordInput from '../../components/auth/PasswordInput.jsx';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/admin');
    }
  };

  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to your account to continue">
      <form onSubmit={handleSubmit} className="space-y-3">
        <TextInput 
          label="Email Address" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email"
        />
        <PasswordInput 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-gray-800">
            <input 
              type="checkbox" 
              className="h-3 w-3 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500" 
            />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot password?</Link>
        </div>
        <button 
          type="submit" 
          className="w-full bg-[#2563EB] text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm"
          style={{ borderRadius: '8px' }}
        >
          Sign In
        </button>
        <p className="mt-2 text-center text-xs text-gray-600">
          Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline font-medium">Create one</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
