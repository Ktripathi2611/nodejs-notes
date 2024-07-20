import React, { useState } from 'react';

const Box = () => {
  const [boxStyle, setBoxStyle] = useState({
    backgroundColor: 'white',
    width: '100px',
    height: '100px',
  });

  const handleClick = () => {
    setBoxStyle({ backgroundColor: 'lightblue' });
  };

  const handleDoubleClick = () => {
    setBoxStyle({ width: '200px', height: '200px' });
  };

  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent default right-click menu
    setBoxStyle({ backgroundColor: 'white', width: '100px', height: '100px' });
  };

  return (
    <div
      style={boxStyle}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onContextMenu={handleContextMenu}
    />
  );
};

export default Box;
