import React, { useState, useEffect } from 'react';
import { Card, Table, Pagination, Container, Row, Col, Nav } from 'react-bootstrap';
import './style.css';

const ITEMS_PER_PAGE = 8;

const App = () => {
  const [userRole, setUserRole] = useState('organizer'); // Set the user's role here

  const [organizers, setOrganizers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalOrganizers, setTotalOrganizers] = useState(0);

  useEffect(() => {
    async function fetchOrganizers() {
      try {
        const response = await fetch('http://127.0.0.1:5000/organizers');
        const data = await response.json();

        // Assuming the API response has an 'organizers' property
        if (Array.isArray(data.organizers)) {
          setOrganizers(data.organizers);
        } else {
          console.error('Invalid data format:', data);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching organizers:', error);
        setLoading(false);
      }
    }

    async function fetchEvents() {
      try {
        const response = await fetch('http://127.0.0.1:5000/events');
        const data = await response.json();

        // Assuming the API response has an 'events' property
        if (Array.isArray(data.events)) {
          setEvents(data.events);
          setCurrentEvents(data.events.slice(0, ITEMS_PER_PAGE)); // Initial events on page 1
        } else {
          console.error('Invalid data format:', data);
        }

        setEventsLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setEventsLoading(false);
      }
    }

    async function fetchTotalEvents() {
      try {
        const response = await fetch('http://127.0.0.1:5000/get_total_events');
        const data = await response.json();
        setTotalEvents(data.total_events);
      } catch (error) {
        console.error('Error fetching total events:', error);
      }
    }

    async function fetchTotalOrganizers() {
      try {
        const response = await fetch('http://127.0.0.1:5000/total_organizers');
        const data = await response.json();
        setTotalOrganizers(data.total_organizers);
      } catch (error) {
        console.error('Error fetching total organizers:', error);
      }
    }

    fetchOrganizers();
    fetchEvents();
    fetchTotalEvents();
    fetchTotalOrganizers();
  }, []);

  const filteredOrganizers = organizers.filter((organizer) =>
    organizer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const newStartIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
    const newEndIndex = newStartIndex + ITEMS_PER_PAGE;
    setCurrentEvents(events.slice(newStartIndex, newEndIndex));
  };

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={2} className="sidebar">
            <div className="sidebar-title">
              EventMS
            </div>
            <Nav defaultActiveKey="/events" className="flex-column">
              {userRole === 'organizer' && (
                <Nav.Link href="/events">Events</Nav.Link>
              )}
              {userRole === 'admin' && (
                <Nav.Link href="/organizers">Organizers</Nav.Link>
              )}
              <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav>
          </Col>
          <Col sm={10} className="main-content">
            {userRole === 'organizer' && window.location.pathname === '/events' && (
              <div>
                <h2>Events</h2>
                {/* ... (events section) */}
              </div>
            )}

            {userRole === 'admin' && window.location.pathname === '/organizers' && (
              <div>
                <h2>Organizers</h2>
                {/* ... (organizers section) */}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
