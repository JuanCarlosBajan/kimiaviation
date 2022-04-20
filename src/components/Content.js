import React from 'react';
import Sky from './Sky';
import Window from './window';
import Priorities from './Priorities';
import Quote from './Quote';
import Slider from './Slider';
import WordSlider from './WordSlider';
import '../styles/Content.scss';

const Content = () => {

    return (
        <div className="Content">
            
            <Sky/>

            <Window/>

            <Priorities/>
            
            <Quote/>

            <Slider/>

            <WordSlider/>

            <div className="Info_Container"/>

            
                
        </div>
    )

}

export default Content;