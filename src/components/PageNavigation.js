import React, { useState } from 'react';
import '../components/styles/PageNavigation.css';

export default function PageNavigation() {
  const [activeBtn, setActiveBtn] = useState('button1');
  const contentMap = {
    button1: 'Content for Button 1',
    button2: 'Content for Button 2',
    button3: 'Content for Button 3',
    button4: 'Content for Button 4',
  };

  const handleClick = (button) => {
    setActiveBtn(button);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick('button1')}>Button 1</button>
        <button onClick={() => handleClick('button2')}>Button 2</button>
        <button onClick={() => handleClick('button3')}>Button 3</button>
        <button onClick={() => handleClick('button4')}>Button 4</button>
      </div>
      <div>
        <p>{contentMap[activeBtn]}</p>
      </div>
    </div>
  );
}
