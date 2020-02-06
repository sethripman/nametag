import React from 'react';

const Shape = (text, color, bgColor) => {



  return (
    <>
      <div style={{ width: '100px', height: '100px', backgroundColor: decodeURIComponent(bgColor), color: decodeURIComponent(color) }}>
        Hello, My Name Is {text}
      </div>
    </>
  );
};

export default NameTag;
