import React from 'react';
import slide1 from '../Assets/slider1.webp';
import slide2 from '../Assets/slider2.webp';
import slide3 from '../Assets/slider3.webp';
import slide4 from '../Assets/slider4.webp';
import slide5 from '../Assets/slider5.webp';
import slide6 from '../Assets/slider6.webp';
import slide7 from '../Assets/slider7.webp';
import slide8 from '../Assets/slider8.webp';
import slide9 from '../Assets/slider9.webp';

function Slider() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide3">
          <img src={slide1} alt="_" className="priorities_picture3" />
        </div>
        <div className="slide1">
          <img src={slide2} alt="_" className="priorities_picture1" />
        </div>
        <div className="slide4">
          <img src={slide3} alt="_" className="priorities_picture4" />
        </div>
        <div className="slide2">
          <img src={slide4} alt="_" className="priorities_picture2" />
        </div>
        <div className="slide1">
          <img src={slide5} alt="_" className="priorities_picture1" />
        </div>
        <div className="slide4">
          <img src={slide6} alt="_" className="priorities_picture4" />
        </div>
        <div className="slide2">
          <img src={slide7} alt="_" className="priorities_picture2" />
        </div>
        <div className="slide1">
          <img src={slide8} alt="_" className="priorities_picture1" />
        </div>
        <div className="slide3">
          <img src={slide9} alt="_" className="priorities_picture3" />
        </div>
        <div className="slide3">
          <img src={slide1} alt="_" className="priorities_picture3" />
        </div>
        <div className="slide1">
          <img src={slide2} alt="_" className="priorities_picture1" />
        </div>
        <div className="slide4">
          <img src={slide3} alt="_" className="priorities_picture4" />
        </div>
        <div className="slide2">
          <img src={slide4} alt="_" className="priorities_picture2" />
        </div>
        <div className="slide1">
          <img src={slide5} alt="_" className="priorities_picture1" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
