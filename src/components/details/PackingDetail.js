import React from 'react';
import { Text } from '@nextui-org/react';

export default function PackingDetail() {
  return (
    <>
      <div className='detail-paragraph paragraph'>
        <Text>
          Teton Valley Lodge is located in a rural area of Idaho. However, if
          you forget something, we can make a run to the store for you and we
          have a fully stocked fly shop with gear. Use this packing list to
          prepare for your trip to Teton Valley Lodge.
        </Text>
      </div>
      <div className='detail-paragraph paragraph'>
        <Text>
          We recommend a water-repellent bag for your time outdoors. Always have
          your rain gear near or at the top for easy access. Weather in Idaho is
          very unpredictable. No matter when you visit, be prepared for highs in
          the 80s and lows in the 40s. Always be prepared for rain and wind.
        </Text>
      </div>
      <div className='detail-paragraph paragraph'>
        <Text>
          Lodge clothing should be casual and comfortable. Because we are
          exposed to the elements each day away from the lodge, warmth and
          dryness should be considered in all clothing choices. We recommend
          layering your clothing for warmth and versatility.
        </Text>
      </div>
      <div>
        <Text h2 className='detail-heading'>
          Fishing Gear
        </Text>
      </div>
      <div className='detail-paragraph paragraph'>
        <Text>
          If you don’t have your own, we can provide you with rental equipment
          each day. Many people just rent from us to save the hassle of
          traveling with their own gear.
        </Text>
      </div>
      <div className='detail-list paragraph'>
        <ul>
          <li>2 rods and reels, either 5 or 6 weights</li>
          <li>
            We provide all terminal tackle including, leaders, tippets, and
            flies.
          </li>
        </ul>
      </div>
      <div>
        <Text h2 className='detail-heading'>
          Clothing & Accessories
        </Text>
      </div>
      <div className='detail-paragraph paragraph'>
        <Text>
          If you forget something, we have a fully stocked fly shop with
          clothing and gear for sale.
        </Text>
      </div>
      <div className='detail-list paragraph'>
        <ul>
          <li>High-quality breathable raincoat in good condition</li>
          <li>Long sleeved shirt</li>
          <li>Wet wading sandals or shoes</li>
          <li>Lightweight pants or shorts</li>
          <li>
            Lightweight and fleece long underwear (May, June, September,
            October)
          </li>
          <li>Fleece sweater or jacket</li>
          <li>Casual clothing for wearing around the lodge</li>
          <li>Toiletries</li>
          <li>Camera</li>
          <li>
            Insect repellant. We sell this so you don’t have to deal with TSA.
          </li>
          <li>Sunscreen. We sell this so you don’t have to deal with TSA.</li>
          <li>Waterproof boat bag</li>
          <li>Liquor (if desired)</li>
          <li>Beer and wine (available at the lodge)</li>
          <li>Books or games</li>
          <li>Polarized sunglasses</li>
          <li>Hat</li>
        </ul>
      </div>
    </>
  );
}
