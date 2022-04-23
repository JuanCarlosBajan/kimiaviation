import React from 'react';
import '../styles/Content.scss';

function Quote() {
  return (
    <>
      <div className="phrase_container">
        <h1 className="quote_text">
          We work tirelessly to
          <br />
          make your trip an <br />
          <em className="resalted_word">
            <strong>unforgettable</strong>
          </em>{' '}
          experience
        </h1>
      </div>

      <div className="priorities_picture_container">
        <div className="line" />
      </div>
    </>
  );
}

export default Quote;
