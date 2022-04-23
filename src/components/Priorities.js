import React from 'react';

function Priorities() {
  return (
    <div className="priorities_container">
      <div className="priorities_subcontainer">
        <div className="priorities_title">
          <h1 className="quote_text">
            Our
            <em>
              <strong> Priorities</strong>
            </em>
          </h1>
        </div>

        <div className="cards_container">
          <div id="grid1" className="grid-item grid1">
            <div>
              <div className="priorities_picture_container">
                <div className="priorities_picture1" />
              </div>
              <div>
                <h1 className="priorities_subtitle">Safety</h1>
              </div>
              <p className="priorities_info">
                Recent times have exposed the vulnerability of the modern world
                we live in. At KIMI, we provide an experience that eliminates
                the health and safety risks of modern traveling. Your own
                private route at the airport means you avoid all crowded waiting
                lines at check-in, border security and the gate. Once in the
                air, only your inner circle accompanies you. We bring the amount
                of contact during your travel experience to a minimum, and
                escort you all the way through.{' '}
              </p>
            </div>
          </div>
          <div id="grid2" className="grid-item grid2">
            <div>
              <div className="priorities_picture_container">
                <div className="priorities_picture2" />
              </div>
              <div>
                <h1 className="priorities_subtitle">Comfort</h1>
              </div>
              <p className="priorities_info">
                Traveling in the modern era should include the latest
                innovations in terms of comfort. With KIMI, you enjoy specially
                curated refreshments, a fully stocked bar, access to Wi-Fi, and
                premium sound, entertainment and gaming systems. Our spacious
                seats for up to fourteen people transform into six serene beds.
                Not only do we ensure the most comfortable and luxurious
                experience in between the clouds, but we take care of anything
                you need once you’re on the ground.
              </p>
            </div>
          </div>
          <div id="grid3" className="grid-item grid3">
            <div>
              <div className="priorities_picture_container">
                <div className="priorities_picture3" />
              </div>
              <div>
                <h1 className="priorities_subtitle">Efficiency</h1>
              </div>
              <p className="priorities_info">
                At KIMI, we know how precious your time is. That is why you set
                the schedule and destination. In the meantime, we make sure to
                dramatically reduce your time at the airport by eliminating the
                procedures that normally make your experience ever so
                time-consuming and tiresome. Waiting at check-in, luggage belts,
                border security and airport lounges are all in the past. KIMI
                makes traveling such a careless experience, you’ll wish you
                could spend more time with us.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Priorities;
