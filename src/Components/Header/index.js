import React from "react";
import "./index.css";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    // Header section starts here
    <Navbar className="header-bar " expand="lg">
      <Container className="main">
        <Navbar.Brand className="logo">User-Profile: </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
    // Header section ends here
  );
}

export default Header;
