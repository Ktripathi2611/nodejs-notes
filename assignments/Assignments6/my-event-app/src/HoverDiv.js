import React from 'react';

const HoverDiv = () => {
  const hoverStyle = { backgroundColor: 'lightblue' };

  return (
    <div
      onMouseOver={() => console.log('Hovering over div')}
      onMouseOut={() => console.log('Leaving div')}
      style={hoverStyle}
    >
      Hover over me!
    </div>
  );
};

export default HoverDiv;
