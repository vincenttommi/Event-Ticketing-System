import React, { useState, useEffect } from 'react';
import { Card, Table, Pagination, Container, Row, Col, Nav, Modal, Button, Form } from 'react-bootstrap';
import './style.css';

const ITEMS_PER_PAGE = 8;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [events, setEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    location: '',
    description: '',
    event_category: '',
    event_time: '',
    image: '',
    organizer_id: '',
    regular_price: '',
    remaining_tickets: '',
    ticket_levels: '',
    tickets_number: '',
    vip_price: '',
    early_bird_price: ''
  });

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('http://127.0.0.1:5000/events');
        const data = await response.json();

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

    fetchEvents();
    fetchTotalEvents();
  }, []);

  const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const newStartIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
    const newEndIndex = newStartIndex + ITEMS_PER_PAGE;
    setCurrentEvents(events.slice(newStartIndex, newEndIndex));
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleAddEvent = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/add_event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        // Refresh the events list after adding the event
        setEvents();
        handleCloseModal();
      } else {
        console.error('Error adding event:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
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
              <Nav.Link href="/events">Events</Nav.Link>
            </Nav>
          </Col>
          <Col sm={10} className="main-content">
            <div>
              <h2>Events</h2>
              <Button variant="primary" onClick={handleShowModal}>
                Add New Event
              </Button>
              {eventsLoading ? (
                <p>Loading...</p>
              ) : (
                <div>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Organizer ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentEvents.map((event) => (
                        <tr key={event.id}>
                          <td>{event.id}</td>
                          <td>{event.title}</td>
                          <td>{event.location}</td>
                          <td>{event.description}</td>
                          <td>{event.event_category}</td>
                          <td>{event.organizer_id}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Pagination>
                    <Pagination.Prev
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                    />
                    {Array.from({ length: totalPages }, (_, index) => (
                      <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </Pagination.Item>
                    ))}
                    <Pagination.Next
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                    />
                  </Pagination>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={newEvent.location}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newEvent.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="event_category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="event_category"
                value={newEvent.event_category}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="event_time">
              <Form.Label>Event Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="event_time"
                value={newEvent.event_time}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={newEvent.image}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="organizer_id">
              <Form.Label>Organizer ID</Form.Label>
              <Form.Control
                type="text"
                name="organizer_id"
                value={newEvent.organizer_id}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="regular_price">
              <Form.Label>Regular Price</Form.Label>
              <Form.Control
                type="number"
                name="regular_price"
                value={newEvent.regular_price}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="remaining_tickets">
              <Form.Label>Remaining Tickets</Form.Label>
              <Form.Control
                type="number"
                name="remaining_tickets"
                value={newEvent.remaining_tickets}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="ticket_levels">
              <Form.Label>Ticket Levels</Form.Label>
              <Form.Control
                type="text"
                name="ticket_levels"
                value={newEvent.ticket_levels}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="tickets_number">
              <Form.Label>Tickets Number</Form.Label>
              <Form.Control
                type="number"
                name="tickets_number"
                value={newEvent.tickets_number}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="vip_price">
              <Form.Label>VIP Price</Form.Label>
              <Form.Control
                type="number"
                name="vip_price"
                value={newEvent.vip_price}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="early_bird_price">
              <Form.Label>Early Bird Price</Form.Label>
              <Form.Control
                type="number"
                name="early_bird_price"
                value={newEvent.early_bird_price}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddEvent}>
            Add Event
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
