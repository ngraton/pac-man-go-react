import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function ForNavBar() {

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href='/'>Fog Of Run</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <NavDropdown title="Games" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/newgame">New Game</NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default ForNavBar;