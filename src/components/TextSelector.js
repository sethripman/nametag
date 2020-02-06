import React from 'react';

const ColorSelector = (text, setText) => {
  
  const handleChange = ({ target }) => setText(target.value);

  return (
    <input type="text" value={text} onChange={handleChange} />
  );
};

export default ColorSelector;
