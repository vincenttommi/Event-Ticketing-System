import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img11 from '../../assets/concert.jpg';

function Explore() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '2%',
  };

  const inputStyle = {
    padding: '8px',
    marginRight: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
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

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginLeft: '2%',
    marginRight: '2%',
  };

  const cardStyle = {
    width: 'calc(25% - 20px)', // 4 cards per row with some margin
    height: '440px', // Reduce the height as desired
    margin: '10px',
    outline: 'none', // Remove the outline when focused
  };
  const cardImageStyle = {
    width: '100%', // Set a fixed width for all images
    height: '200px', // Set a fixed height for all images
    margin: 0, // Remove any margin
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events initially
    fetchEvents();
  }, []);

  useEffect(() => {
    // Filter events based on search criteria
    const filteredEvents = filterEvents();
    setEvents(filteredEvents);
  }, [searchQuery, selectedLocation, selectedCategory]);

  const fetchEvents = () => {
    fetch('http://127.0.0.1:5000/events')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setEvents(data.events))
      .catch(error => console.error('Error fetching events:', error));
  };

  const filterEvents = () => {
    return events.filter(event => {
      const nameMatches = event.title.toLowerCase().includes(searchQuery.toLowerCase());
      const locationMatches = selectedLocation === '' || event.location.toLowerCase().includes(selectedLocation.toLowerCase());
      const categoryMatches = selectedCategory === '' || event.event_category.toLowerCase().includes(selectedCategory.toLowerCase());
      return nameMatches && locationMatches && categoryMatches;
    });
  };

  return (
    <>
      <div style={{ display: 'flex-column' }}>
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
              width: '100%',
            }}
          />
        </div>

        <div style={containerStyle}>
          {/* Add search inputs */}
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Search by location"
            value={selectedLocation}
            onChange={e => setSelectedLocation(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Search by category"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            style={inputStyle}
          />
          <button style={buttonStyle}>
            Search
          </button>
        </div>

        <div id="explore_concert_cards" style={cardContainerStyle}>
          {events.map(event => (
           <Card key={event.id} style={{ ...cardStyle, boxShadow: 'none', border: 'none' }}>
               <Card.Img variant="top" src={event.image} style={{ ...cardImageStyle, objectFit: 'cover', borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }} />
              <Card.Body>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <i className="far fa-calendar-plus" style={{ marginRight: '10px' }}></i> {/* Calendar Icon */}
                  <i className="fas fa-share-alt"></i> {/* Share Icon */}
                </div>
                <Card.Title>{event.title}</Card.Title>
                <p>Location: {event.location}</p>
                <p>Category: {event.event_category}</p>
                {/* Add other event properties as needed */}
                <Button variant="primary" style={{ backgroundColor: 'green' }}>
                  BUY NOW
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div id="explore_footer"></div>
      </div>

      <Footer />
    </>
  );
}

export default Explore;
