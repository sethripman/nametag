import React from 'react';

const ColorSelector = (setColor, setBgColor) => {
  
  const handleChange = ({ target }) => setColor(target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="color" value={color} onChange={handleChange} />
      <input type="color" value={bgColor} onChange={handleChange} />
    </form>
  );
};

export default ColorSelector;
