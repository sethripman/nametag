import React, { useState } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';
import styles from './App.css';

const NameTag = () => {
  const [text, setText] = useState('Seth');
  const [bgColor, setBgColor] = useState('black');
  const [color, setColor] = useState('white');

  return (
    <div style={styles}>
      <TextSelector text={text} setText={setText} />
      <ColorSelector bgColor={bgColor} color={color} setBgColor={setBgColor} setColor={setColor} />
      <Shape text={text} color={color} bgColor={bgColor}/>
    </div>
  );
};

export default NameTag;
