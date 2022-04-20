import React from 'react';
import '../styles/Content.scss';

const Sky = () => {
    
    return( 

        <div className="Video_Container" id="video">
                <video className='Video_Container2' autoPlay muted loop id="videoSky">
                    <source src={'https://player.vimeo.com/external/563130035.hd.mp4?s=5bd311f698519ffa90aa5136b96d1e86aa78d107&profile_id=175'} type="video/mp4"></source>    
                </video>
        </div>

    )

}

export default Sky;