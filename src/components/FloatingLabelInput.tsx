'use client';

import React, { useState, FocusEvent, ChangeEvent } from 'react';

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ label, ...inputProps }) => {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setFocused(false);
      setFilled(false);
    } else {
      setFocused(false);
      setFilled(true);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setFilled(true);
      setFocused(true);
    }
    if (event.target.value === '' && focused) {
      setFilled(false);
    }
  };

  return (
    <div className="form-group">
      <input {...inputProps} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} className={focused || filled ? 'filling' : ''} required />
      <label>{label}</label>
    </div>
  );
};

export default FloatingLabelInput;
