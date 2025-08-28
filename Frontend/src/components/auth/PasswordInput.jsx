import React, { useState } from 'react';
import TextInput from './TextInput.jsx';
import ViewPasswordIcon from '../../assets/ViewPasswordIcon.svg';

export default function PasswordInput({ label = 'Password', value, onChange, placeholder = 'Enter your password', error }) {
  const [show, setShow] = useState(false);
  return (
    <TextInput
      label={label}
      type={show ? 'text' : 'password'}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={error}
      rightSlot={
        <button 
          id="toggle-password-btn"
          type="button" 
          onClick={() => setShow(!show)} 
          aria-label={show ? 'Hide password' : 'Show password'}
          className="bg-transparent border-none p-0 m-0"
        >
          <img 
            src={ViewPasswordIcon} 
            alt="Toggle password visibility" 
            className="w-4 h-4" 
          />
        </button>
      }
    />
  );
} 