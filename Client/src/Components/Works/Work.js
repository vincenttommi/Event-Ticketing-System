import React from 'react';
import img1 from '../../assets/work.jpg';
import './works.css';

function Work() {
  return (
    <><div style={{paddingBottom:'80px'}}>
<h2 className="how-it-works-title">How it Works</h2>
      <div className="how-it-works-container">
        <img src={img1} alt="Your Image" className="works-image" />
        <div className="works-description">
          <ol>
            <li><h1> Create</h1>Create an event and add a name, date, tickets, and description.</li>
            <li><h1> Customize</h1>Add personality to your event page with event details, images, videos, and more.</li>
            <li><h1> Promote</h1>Share the event via social media with one click and spread the word via email or in person.</li>
            <li><h1> Manage</h1>Generate sales with early-bird discounts, coupons, and group ticketing features, and more.</li>
            <li><h1> Receive</h1>Get paid directly to your bank account according to your schedule.</li>
          </ol>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Work;
