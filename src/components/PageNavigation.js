import React, { useState } from 'react';
import { Navbar, Link, Dropdown, Image, Text, Button } from '@nextui-org/react';
import '../components/styles/PageNavigation.css';
import PackingDetail from './details/PackingDetail';
import DayDetail from './details/DayDeail';
import FAQDetail from './details/FAQDetail';

export default function PageNavigation() {
  const [content, setContent] = useState(PackingDetail);

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
          backgroundColor: '#506A63',
          borderRadius: '8px',
          '@xs': {
            display: 'block',
          },
        }}
        onClick={() => handleButtonClick(PackingDetail)}>
        PACKING LIST
      </Button>
      <Button
        className='day-btn'
        css={{
          fontWeight: 'bold',
          fontSize: '20px',
          backgroundColor: '#506A63',
          borderRadius: '8px',
          '@xs': {
            display: 'block',
          },
        }}
        onClick={() => handleButtonClick(DayDetail)}>
        A TYPICAL DAY
      </Button>
      <Button
        className='faq-btn'
        css={{
          fontWeight: 'bold',
          fontSize: '20px',
          backgroundColor: '#506A63',
          borderRadius: '8px',
          '@xs': {
            display: 'block',
          },
        }}
        onClick={() => handleButtonClick(FAQDetail)}>
        FAQ
      </Button>
      <div className='detail-content-container'>{content}</div>
    </div>
  );
}
