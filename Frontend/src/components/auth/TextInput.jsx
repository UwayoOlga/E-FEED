import React from 'react';

export default function TextInput({ label, type = 'text', value, onChange, placeholder, error, rightSlot, ...props }) {
  return (
    <div>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1 font-['Inter']">{label}</label>}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none pr-10 font-['Inter'] text-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
          style={{ borderRadius: '8px' }}
          {...props}
        />
        {rightSlot && (
          <div className="absolute inset-y-0 right-3 flex items-center text-gray-500">
            {rightSlot}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-600 font-['Inter']">{error}</p>}
    </div>
  );
} 