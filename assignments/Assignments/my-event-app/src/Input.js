import React from 'react';

const Input = () => {
  const handleChange = (event) => {
    console.log('Input value:', event.target.value);
  };

  return (
    <input type="text" onChange={handleChange} />
  );
};

export default Input;
