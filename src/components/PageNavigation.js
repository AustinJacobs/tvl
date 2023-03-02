import React, { useState } from 'react';
import { Navbar, Link, Dropdown, Image, Text, Button } from '@nextui-org/react';
import '../components/styles/PageNavigation.css';

export default function PageNavigation() {
  const [content, setContent] = useState('');

  const handleButtonClick = (content) => {
    setContent(content);
  };

  return (
    <div className='pageNav'>
      <Button
        className='packing-btn'
        css={{
          fontWeight: 'bold',
          fontSize: '20px',
          backgroundColor: '#888667',
          display: 'none',
          borderRadius: '8px',
          '@xs': {
            display: 'block',
          },
        }}
        onClick={() => handleButtonClick('Button 1 content')}>
        PACKING LIST
      </Button>
      <Button
        className='day-btn'
        css={{
          fontWeight: 'bold',
          fontSize: '20px',
          backgroundColor: '#888667',
          display: 'none',
          borderRadius: '8px',
          '@xs': {
            display: 'block',
          },
        }}
        onClick={() => handleButtonClick('Button 2 content')}>
        A TYPICAL DAY
      </Button>
      <Button
        className='faq-btn'
        css={{
          fontWeight: 'bold',
          fontSize: '20px',
          backgroundColor: '#888667',
          display: 'none',
          borderRadius: '8px',
          '@xs': {
            display: 'block',
          },
        }}
        onClick={() => handleButtonClick('Button 3 content')}>
        FAQ
      </Button>
      <div>{content}</div>
    </div>
  );
}
