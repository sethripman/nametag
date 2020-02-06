import React from 'react';

const ColorSelector = (color, bgColor, setColor, setBgColor) => {
  
  const handleChange = ({ target }) => setColor(target.value);
  const handleBgChange = ({ target }) => setBgColor(target.value);

  return (
    <>
      <input type="color" value={color} onChange={handleChange} />
      <input type="color" value={bgColor} onChange={handleBgChange} />
    </>
  );
};

export default ColorSelector;
