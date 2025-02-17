import React from 'react';

export const Input = ({ type = 'text', placeholder = '', value = '', onChange = () => {}, error = false, classCus = 'w-full p-2 border rounded-md' }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${classCus} ${
        error ? 'border-red-500' : 'border-gray-300'
      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
    />
  );
};