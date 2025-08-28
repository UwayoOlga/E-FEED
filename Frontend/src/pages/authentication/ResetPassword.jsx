import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout.jsx';
import PasswordInput from '../../components/auth/PasswordInput.jsx';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!password) newErrors.password = 'Password is required';
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm password is required';
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle password reset logic here
      console.log('Password reset submitted:', { password });
      navigate('/login'); // Redirect to login after successful reset
    }
  };

  return (
    <AuthLayout title="Reset Password">
      <form onSubmit={onSubmit} className="space-y-3">
        <PasswordInput
          label="Password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Enter Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
        />
        <button
          type="submit"
          className="w-full bg-[#2563EB] text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold"
          style={{ borderRadius: '8px' }}
        >
          Reset
        </button>
      </form>
      <div className="mt-4 text-center text-xs">
        <Link to="/login" className="text-blue-600 hover:underline">
          Back to Login
        </Link>
      </div>
    </AuthLayout>
  );
} 