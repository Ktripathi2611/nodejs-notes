import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', { name, message, isChecked });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
      />
      <br />

      <label htmlFor="message">Message: </label>
      <textarea id="message" value={message} onChange={handleMessageChange} />
      <br />

      <label htmlFor="terms">Accept terms and conditions: </label>
      <input
        type="checkbox"
        id="terms"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
