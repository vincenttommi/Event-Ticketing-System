import React from 'react'
import img1 from '../../assets/work.jpg'
function Work() {
  return ( <><h2 style={{marginLeft:'190px'}} >How it Works</h2>
  <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={img1} alt="Your Image" style={{ width: '518px', height: '608px',borderRadius:'25px', marginRight: '20px', marginLeft:'90px' }} />

      <div>

          <ol>
            <p><h1>1. Create</h1>Create an event and add a name, date, tickets and
 description.</p>
            <p><h1>2. Customize</h1>Add personality to your event page with event
 details, images, videos, and more.</p>
            <p><h1>3. Promote</h1>Share the event via social media with one click and
 spread the word via email or in person.</p>
            <p><h1>4. Manage</h1>Generate sales with early-bird discounts, coupons
 and group ticketing features, and more.</p>
            <p><h1>5. Receive</h1>Get paid directly to your bank account according
 to your schedule.</p>
          </ol>
      </div>
  </div></>

  )
}

export default Work