import React from 'react';
import Sky from './Sky';
import Window from './Window';
import Priorities from './Priorities';
import Quote from './Quote';
import Slider from './Slider';
import WordSlider from './WordSlider';
import Contact from './Contact';
import Footer from './Footer';
import '../styles/Content.scss';

function Content() {
  return (
    <div className="Content">
      <Sky />

      <Window />

      <Priorities />

      <Quote />

      <Slider />

      <WordSlider />

      <div className="Info_Container" />

      <Contact />

      <Footer />
    </div>
  );
}

export default Content;
