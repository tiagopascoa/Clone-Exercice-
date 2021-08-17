import React from "react";
import "../css/Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export const MyNavbar = () => {
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg" fixed="top">
      <Container fluid className="nav-container">
        <Navbar.Brand className="me-5 navbrand">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="me-4">ABOUT</Nav.Link>
            <Nav.Link className="me-4">COMMUNITY</Nav.Link>
            <Nav.Link className="me-4">LOCATION</Nav.Link>
            <Nav.Link className="me-4">OUR MENU</Nav.Link>
            <Nav.Link className="me-4">RECIPES</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link className="me-4">CONTACT</Nav.Link>
            <Nav.Link>LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
