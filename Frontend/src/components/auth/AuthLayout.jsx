import React from 'react';
import logo from '../../assets/logo.svg';

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-[#2563EB] px-4 font-['Inter']">
      <div className="text-center mb-6">
        <div className="w-14 h-14 mx-auto flex items-center justify-center">
          <img src={logo} alt="School Feeding Logo" className="w-full h-full" />
        </div>
        <h1 className="text-[30px] font-bold text-white mt-3">School Feeding</h1>
        <p className="text-sm text-blue-100">{subtitle || "Digital School Management Platform"}</p>
      </div>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {title && (
          <>
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">{title}</h2>
            <p className="text-center text-gray-500 mb-6">Sign in to your account to continue</p>
          </>
        )}
        {children}
      </div>

      <footer className="mt-8 text-center text-sm text-blue-100">
        <p>© 2025 School Feeding System. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Support</a>
        </div>
      </footer>
    </div>
  );
} 