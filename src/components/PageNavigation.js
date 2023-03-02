import React, { useState } from 'react';
import '../components/styles/PageNavigation.css';

export default function PageNavigation() {
  const [content, setContent] = useState('');

  const handleButtonClick = (content) => {
    setContent(content);
  };

  return (
    <div className='pageNav'>
      <h1>Button Content Example</h1>
      <button onClick={() => handleButtonClick('Button 1 content')}>
        Button 1
      </button>
      <button onClick={() => handleButtonClick('Button 2 content')}>
        Button 2
      </button>
      <button onClick={() => handleButtonClick('Button 3 content')}>
        Button 3
      </button>
      <button onClick={() => handleButtonClick('Button 4 content')}>
        Button 4
      </button>
      <div>{content}</div>
    </div>
  );
}
