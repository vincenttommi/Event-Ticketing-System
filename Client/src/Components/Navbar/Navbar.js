import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import AttendeeDashboard from '../attend/AttendeeDashboard ';
import Industry from '../Industry/Industry';




const Navbar2 = () => { 
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">EventMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Features</Nav.Link>
            <Nav.Link href="Industry">Industry</Nav.Link>
            <Nav.Link href="/Explore">Explore Events</Nav.Link>
            <Nav.Link href="/Pricing">Pricing</Nav.Link>
                {/* <Nav.Link href="/OrganizerDashboard">OrganizerDashboard</Nav.Link>  */}
              {/* <Nav.Link href="/AdminDashboard">AdminDashboard</Nav.Link> */}
              {/* <Nav.Link href="/AttendeeDashboard">AttendeeDashboard</Nav.Link>  */}
          </Nav>
          <Nav>
            <Nav.Link href="SignUp">SignUp</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;