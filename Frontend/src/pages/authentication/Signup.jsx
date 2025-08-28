import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout.jsx';
import TextInput from '../../components/auth/TextInput.jsx';
import PasswordInput from '../../components/auth/PasswordInput.jsx';

export default function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'Required';
    if (!lastName) newErrors.lastName = 'Required';
    if (!email) newErrors.email = 'Required';
    if (password.length < 6) newErrors.password = 'Min 6 characters';
    if (password !== confirm) newErrors.confirm = 'Passwords do not match';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      navigate('/login');
    }
  };

  return (
    <AuthLayout title="Create Account" subtitle="Join our school feeding management platform">
      <div className="mt-4">
        <form className="space-y-2" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <TextInput 
              label="First Name" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              error={errors.firstName}
              placeholder="Enter your first name"
            />
            <TextInput 
              label="Last Name" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              error={errors.lastName}
              placeholder="Enter your last name"
            />
          </div>
          <TextInput 
            label="Email Address" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            error={errors.email}
            placeholder="Enter your email"
          />
          <PasswordInput 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            error={errors.password}
            placeholder="Enter your password"
          />
          <PasswordInput 
            label="Confirm Password" 
            value={confirm} 
            onChange={(e) => setConfirm(e.target.value)} 
            error={errors.confirm}
            placeholder="Confirm your password"
          />
          <button 
            type="submit" 
            className="w-full bg-[#2563EB] text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm"
            style={{ borderRadius: '8px' }}
          >
            Create Account
          </button>
          <p className="text-xs text-center text-gray-600">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline font-medium">Sign in</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
} 