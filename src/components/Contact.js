import React from 'react';
import { AiOutlineMail, AiOutlineCloudDownload } from 'react-icons/ai';
import { ImAirplane } from 'react-icons/im';

function Contact() {
  return (
    <div className="contact_container">
      <div className="contact">
        <div className="phrase_container">
          <h1 className="links_title">
            Book{' '}
            <em>
              <strong> your experience</strong>
            </em>
          </h1>
          <p className="phrase_p">
            {' '}
            Ready to start your engines? Let us know your schedule and
            destination, and we’ll take care of the rest.
          </p>
        </div>

        <div className="links slider_text">
          <div className="contact_links">
            <div className="circle">
              <AiOutlineMail
                style={{
                  fontSize: '50%',
                  marginLeft: '7.5px',
                  marginBottom: '9px',
                }}
              />
            </div>
            <p className="data">
              {' '}
              Mail us and we`ll be in touch <br />{' '}
              <p className="lined_text data mail">info@kimiaviation.com</p>
            </p>
          </div>
          <div className="contact_links">
            <div className="circle">
              <ImAirplane
                style={{
                  fontSize: '40%',
                  marginLeft: '10.5px',
                  marginBottom: '11px',
                }}
              />
            </div>
            <p className="data">
              {' '}
              Book your PH-LAU flight <br /> directly through
              <p className="lined_text ex">
                <strong> Exxaero</strong>{' '}
              </p>
            </p>
          </div>
          <div className="contact_links">
            <div className="circle">
              <AiOutlineCloudDownload
                style={{
                  fontSize: '50%',
                  marginLeft: '7.5px',
                  marginBottom: '9px',
                }}
              />
            </div>
            <p className="data">
              {' '}
              <p className="lined_text download"> Download </p> the <br />{' '}
              <p className="download2line"> PH-LAU factsheet </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
