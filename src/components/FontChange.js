import React, { useState } from 'react';


function FontSizeChanger() {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
    document.documentElement.style.fontSize = `${fontSize + 0.5}px`;
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
    document.documentElement.style.fontSize = `${fontSize - 0.5}px`;
  };

  return (
    <div>
      <button onClick={increaseFontSize}> Increse font </button>
      <button onClick={decreaseFontSize}> Dercease font </button>
    </div>
  );
}

export default FontSizeChanger;
