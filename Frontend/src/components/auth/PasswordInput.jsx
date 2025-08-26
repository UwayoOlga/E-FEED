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
        <button type="button" onClick={() => setShow(!show)} aria-label={show ? 'Hide password' : 'Show password'}>
          <img src={ViewPasswordIcon} alt="Toggle password visibility" className="w-4 h-4" />
        </button>
      }
    />
  );
} 