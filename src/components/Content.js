import React from 'react';
import Sky from './Sky';
import Window from './window';
import '../styles/Content.css';

const Content = () => {

    return (
        <div className="Content">
            
            <Sky/>

            <Window/>
            
            <div className="Info_Container">

            </div>
                
        </div>
    )

}

export default Content;