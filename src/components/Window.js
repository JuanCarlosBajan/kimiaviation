import React from 'react';
import '../styles/Content.css';

const Window = () => {

    return (
        <div className="Window_Container">
                <video autoPlay muted loop id="videoScene">
                    <source src={'https://player.vimeo.com/external/565526339.hd.mp4?s=d76a061e031cc8d0cb4998060fe7d753e0878231&profile_id=174'} type="video/mp4"></source>    
                </video>
                <div className="Window">
                </div>
        </div>
    )

}

export default Window;