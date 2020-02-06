import React, { useState } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';

const NameTag = () => {
  const [text, setText] = useState('Seth');
  const [bgColor, setBgColor] = useState('black');
  const [textColor, setTextColor] = useState('white');

  return (
    <>
      <TextSelector setText={setText} />
      <ColorSelector setBgColor={setBgColor} setTextColor={setTextColor} />
      <Shape text={text} bgColor={bgColor} textColor={textColor}/>
    </>
  );
};

export default NameTag;
