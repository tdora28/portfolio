'use client';

import React, { useState, FocusEvent, ChangeEvent } from 'react';

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  elementType: 'input' | 'textarea';
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ label, elementType, ...inputProps }) => {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value === '') {
      setFocused(false);
      setFilled(false);
    } else {
      setFocused(false);
      setFilled(true);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value) {
      setFilled(true);
      setFocused(true);
    }
    if (event.target.value === '' && focused) {
      setFilled(false);
    }
  };

  const InputComponent = elementType === 'input' ? 'input' : 'textarea';

  return (
    <div className="form-group">
      <InputComponent {...inputProps} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} className={focused || filled ? 'filling' : ''} required />
      <label>{label}</label>
    </div>
  );
};

export default FloatingLabelInput;
