import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout.jsx';
import TextInput from '../../components/auth/TextInput.jsx';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <AuthLayout title="Forgot Password" subtitle="We'll email you a reset link.">
      {submitted ? (
        <div className="text-center space-y-3">
          <p className="text-gray-700 text-sm font-['Inter']">If an account exists for {email}, you will receive a password reset email shortly.</p>
          <Link to="/login" className="text-blue-600 hover:underline font-['Inter'] text-sm">Back to Sign in</Link>
        </div>
      ) : (
        <form className="space-y-3" onSubmit={onSubmit}>
          <TextInput 
            label="Email Address" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="you@example.com" 
          />
          <button 
            type="submit" 
            className="w-full bg-[#2563EB] text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 font-['Inter'] text-sm"
            style={{ borderRadius: '8px' }}
          >
            Send reset link
          </button>
          <p className="text-xs text-center text-gray-600 font-['Inter']">
            Remembered your password? <Link to="/login" className="text-blue-600 hover:underline font-medium font-['Inter']">Sign in</Link>
          </p>
        </form>
      )}
    </AuthLayout>
  );
} 