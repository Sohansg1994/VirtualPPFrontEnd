import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import favicon from './favicon.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NavigationBar = () => {
  return (
    
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"> <img src={favicon} alt="Bootstrap" width="45" height="36"/></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>

          <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/addbattery">Add Battery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/searchbattery">Search Batteries</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/showall">All Batteries</NavDropdown.Item>
              
            </NavDropdown>
          <Nav.Link  as={Link} to="/">About Us</Nav.Link>
          <Nav.Link  as={Link} to="/">Contact</Nav.Link>
        </Nav>
        <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>

      </Container>
    </Navbar>
   

    
  )
}

export default NavigationBar
