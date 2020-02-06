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
    <>
      <TextSelector style={styles.TextSelector} setText={setText} />
      <ColorSelector style={styles.ColorSelector} setBgColor={setBgColor} setTextColor={setTextColor} />
      <Shape style={styles.Shape} text={text} color={color} bgColor={bgColor}/>
    </>
  );
};

export default NameTag;
