
// import './explore.css';
import React from 'react';
import Footer from '../Footer/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Define the Explore component using JSX
function Explore() {
  return (
   <> <div style={{ display: 'flex-column' }}>
      <div className="image1" style={{ marginLeft: '2%', marginRight: '2%' }}>
        <img
          id="explore_concert_image"
          // src={}
          alt="people at a concert"
          style={{
            display: 'flex',
            justifyContent: 'center', 
            flexWrap: 'wrap',
            height: '70vh',
            width: '100%'
          }}
        />
      </div>
      <div
        id="explore_options_bar"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          margin: '1%'
        }}
      >
        <button>ENTERTAINMENT</button>
        <button>COMMUNITY</button>
        <button>SPORTS</button>
        <button>EDUCATION</button>
        <button>BUSINESS</button>
        <button>CHARITY</button>
      </div>
      <div
        id="explore_concert_cards"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginLeft: '2%',
          marginRight: '2%'
        }}
      >
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" style={{ backgroundColor: 'green' }}>
              BUY NOW
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div id="explore_footer">
      </div>
    </div>

   <Footer/></>
  );
}

export default Explore;
