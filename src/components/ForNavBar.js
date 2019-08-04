import React from 'react';
import { Navbar, Nav  } from 'react-bootstrap';
import PacManLogo from "../images/XOsf.gif";
import './ForNavBar.css';

function ForNavBar() {

  return (
      <Navbar bg="none" variant="danger" expand="md" extend>
        <Navbar.Brand href='/'>
          <img
            alt=""
            src={PacManLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Text className="titleBarText">
          {!!localStorage.getItem('username') ? ` ${localStorage.getItem('username')}  ` : `pac-man-go`}
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
            {!localStorage.getItem('id') ? <Nav.Link href="/login">Login</Nav.Link> : <Nav.Link href="/logout">Logout</Nav.Link>}
            <Nav.Link href="/newgame">New-Game</Nav.Link>

            {/* <NavDropdown title="Games" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/newgame">New Game</NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default ForNavBar;