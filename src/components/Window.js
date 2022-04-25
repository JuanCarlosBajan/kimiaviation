import React from 'react';
import '../styles/Content.scss';
import window from '../Assets/plane-window.png';

function Window() {
  return (
    <>
      <div className="Window_Container">
        <video autoPlay muted loop id="videoScene">
          <source
            src="https://player.vimeo.com/external/565526339.hd.mp4?s=d76a061e031cc8d0cb4998060fe7d753e0878231&profile_id=174"
            type="video/mp4"
          />
        </video>
        <img src={window} alt="Ventana" className="Window" />
        <div className="Window" />
      </div>
      <div className="quote">
        <h1 className="quote_text">
          Explore
          <br />
          the{' '}
          <em>
            <strong>new force</strong>
          </em>
          <br />
          in the private
          <br />
          <em>
            <strong>jet industry</strong>
          </em>
        </h1>
      </div>
    </>
  );
}

export default Window;
