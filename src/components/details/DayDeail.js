import React from 'react';
import { Text } from '@nextui-org/react';

export default function DayDetail() {
  return (
    <>
      <div>
        <Text h2 className='detail-heading'>
          Morning
        </Text>
      </div>
      <div className='detail-paragraph paragraph'>
        <Text>8:00 am – Breakfast starts</Text>
      </div>
      <div className='detail-paragraph paragraph'>
        <Text>8:30 am – Meet guides, get ready</Text>
      </div>
      <div className='detail-paragraph paragraph'>
        <Text>9:00 am – Leave for river</Text>
      </div>

      <div>
        <Text h2 className='detail-heading'>
          Mid Day
        </Text>
      </div>
      <div className='detail-paragraph paragraph'>
        <Text>10:00 am – Start fishing</Text>
      </div>
      <div className='detail-paragraph paragraph'>
        <Text>1:30 pm – Lunch</Text>
      </div>
      <div className='detail-paragraph paragraph'>
        <Text>2:00 pm – Begin fishing</Text>
      </div>

      <div>
        <Text h2 className='detail-heading'>
          Afternoon
        </Text>
      </div>
      <div className='detail-paragraph paragraph'>
        <Text>6:30 pm – Drive back to lodge</Text>
      </div>
      <div className='detail-paragraph paragraph'>
        <Text>7:30 pm – Get ready for dinner, socialize</Text>
      </div>
      <div className='detail-paragraph paragraph'>
        <Text>8:30 pm – Dinner</Text>
      </div>
    </>
  );
}
