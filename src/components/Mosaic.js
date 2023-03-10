import React from 'react';
import '../components/styles/Mosaic.css';
import MosaicImage from '../assets/home/top-down-mosaic-two.jpg';

export default function Mosaic() {
  return (
    <section>
      <img src={MosaicImage} alt='' />
      <article>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </article>
    </section>
  );
}
