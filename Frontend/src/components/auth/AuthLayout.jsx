import React from 'react';
import logo from '../../assets/logo.svg';

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="h-screen w-screen bg-[#2563EB] px-4 overflow-hidden relative">
      {/* Fixed Header */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="w-10 h-10 mx-auto flex items-center justify-center">
          <img src={logo} alt="School Feeding Logo" className="w-full h-full" />
        </div>
        <h1 className="text-xs font-bold text-white mt-1">School Feeding</h1>
        <p className="text-xs text-blue-100">{subtitle || "Digital School Management Platform"}</p>
      </div>

      {/* Centered Card - Only this changes */}
      <div className="h-full flex items-center justify-center pt-16">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-4">
          {title && (
            <>
              <h2 className="text-lg font-semibold text-center text-gray-800 mb-1">{title}</h2>
              <p className="text-center text-gray-500 mb-3 text-xs">Sign in to your account to continue</p>
            </>
          )}
          {children}
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-xs text-white">
        <p>© 2025 School Feeding System. All rights reserved.</p>
        <div className="mt-1 flex justify-center gap-2">
          <a href="#" className="text-white hover:underline hover:text-white" style={{ color: 'white' }}>Privacy Policy</a>
          <a href="#" className="text-white hover:underline hover:text-white" style={{ color: 'white' }}>Terms of Service</a>
          <a href="#" className="text-white hover:underline hover:text-white" style={{ color: 'white' }}>Support</a>
        </div>
      </div>
    </div>
  );
} 