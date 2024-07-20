import React, { useState } from 'react';

const ToggleText = () => {
  const [showText, setShowText] = useState(false);

  const handleShowText = () => {
    setShowText(!showText);
  };

  const handleReset = () => {
    setShowText(false);
  };

  return (
    <div>
      <button onClick={handleShowText}>
        {showText ? 'Hide Text' : 'Show Text'}
      </button>
      {showText && <p>emiway bantai malum hai na  </p>}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ToggleText;
