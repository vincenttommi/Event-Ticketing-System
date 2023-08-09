
// import './explore.css';
import React from 'react';
import Footer from '../Footer/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img11 from '../../assets/concert.jpg';

// Define the Explore component using JSX
function Explore() {

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '2%',
  };
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    width: 'calc(13% - 2%)',
    marginLeft: '1%',
    marginRight: '1%',
    transition: 'background-color 0.3s',
    textAlign: 'center',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
  };
  return (
   <> <div style={{ display: 'flex-column' }}>
      <div className="image1" style={{ marginLeft: '2%', marginRight: '2%' }}>
        <img
          id="explore_concert_image"
           src={img11}
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

      <div style={containerStyle}>
        <button style={buttonStyle}>ENTERTAINMENT</button>
        <button style={buttonStyle}>COMMUNITY</button>
        <button style={buttonStyle}>SPORTS</button>
        <button style={buttonStyle}>EDUCATION</button>
        <button style={buttonStyle}>BUSINESS</button>
        <button style={buttonStyle}>CHARITY</button>
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
