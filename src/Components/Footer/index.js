import "./index.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 main-content">
      <Container>
        <Row className="footer-content">
          <Col md={3}>
            <h5>About Us</h5>
            <ul className="list-parts">
              <li>our story </li>
              <li>vision </li>
              <li>team </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Services</h5>
            <ul className="list-parts">
              <li>Web Design</li>
              <li>Development</li>
              <li>Marketing</li>
              <li>Consulting</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>About Us</h5>
            <ul className="list-parts">
              <li>our story </li>
              <li>vision </li>
              <li>team </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Services</h5>
            <ul className="list-parts">
              <li>Web Design</li>
              <li>Development</li>
              <li>Marketing</li>
              <li>Consulting</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-muted text-center">
              Copyright &copy; {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
