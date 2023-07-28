import React from 'react'
import img1 from '../../assets/work.jpg'
function Work() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
    {/* Image */}
    <img src={img1} alt="Your Image" style={{ width: '700px',height:'400px', marginRight: '20px' }} />

    {/* Steps Information */}
    <div>
      <h2>How it Works</h2>
      <ol>
        <li>Step 1: Create</li>
        <li>Step 2: Customize</li>
        <li>Step 3: Promote</li>
        <li>Step 4: Manage</li>
        <li>Step 5: Receive</li>
      </ol>
    </div>
  </div>

  )
}

export default Work