import React from 'react';
import Container from 'react-bootstrap/Container';
import img1 from '../../assets/coursel.jpg';
import img2 from '../../assets/gogle.png';
import img3 from '../../assets/moringa.png';
import img4 from '../../assets/safaricom.png';
import img5 from '../../assets/yotube.png';
import img6 from '../../assets/microsoft.png';

function About() {
  return (
    <Container fluid>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1 }}>
          <div style={{ paddingTop: '250px', color: '#fff', textAlign: 'center' }}>
          <h2 >
            Event Ticketing Made Simple
          </h2>
          <h4>Start Selling Tickets in 2 minutes</h4>
          <button type="button" class="btn btn-success btn-lg">Learn More</button>
          </div>
         
        </div>
        <img src={img1} className="img-fluid" alt="Responsive image" style={{ width: '100%', height: 'auto', opacity: '0.8', zIndex: 0 }} />
        <h3 style={{ paddingTop: '50px', textAlign: 'center' }}>Events created by thousands of organizations around the globe</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', margin: '50px 0' }}>
          <img src={img2} className="img-fluid" alt="" style={{ maxWidth: '200px', margin: '10px' }} />
          <img src={img3} className="img-fluid" alt="" style={{ maxWidth: '200px', margin: '10px' }} />
          <img src={img4} className="img-fluid" alt="" style={{ maxWidth: '200px', margin: '10px' }} />
          <img src={img5} className="img-fluid" alt="" style={{ maxWidth: '200px', margin: '10px' }} />
          <img src={img6} className="img-fluid" alt="" style={{ maxWidth: '200px', margin: '10px' }} />
        </div>
        <div className="lowest" style={{ margin: '50px 0', height: '400px', background: '#f0f0f0', borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="info" style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Lowest fees in the industry</h2>
            <p style={{ fontSize: '20px' }}>
              No Contracts, No Monthly,
              No Worries.<br />
              Affordable ticket fees that make sense.
              We only charge when you sell tickets
            </p>
            <button type="button" className="btn btn-success">Learn More</button>
          </div>
          <img src={img1} className="img-fluid" alt="" style={{ width: '200px', marginLeft: '20px' }} />
        </div>
        <div className="powerful" style={{ margin: '50px 0', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
  <div className="info" style={{ padding: '20px' }}>
    <h1>Powerful <br/>Features in a  Simple <br/>Dashboard</h1>
    <p style={{ fontSize: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
     quis<br/> nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> 
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore<br/>  eu 
     fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa<br/> qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <img src={img1} className="img-fluid" alt="" style={{ width: '80%', maxWidth: '600px', borderRadius: '25px' }} />
</div>

      </div>
    </Container>
  );
}

export default About;
