import React from 'react';

const Button = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
};

export default Button;
