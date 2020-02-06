import React from 'react';

const ColorSelector = (setText) => {
  
  const handleChange = ({ target }) => setText(target.value);

  return (
      <input type="text" value={text} onChange={handleChange} />
  );
};

export default ColorSelector;
