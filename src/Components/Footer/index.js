import "./index.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 main-content">
      <Container>
        <Row className="footer-content">
          <Col md={3}>
            <h5>main</h5>
            <ul className="list-parts">
              <li>abc </li>
              <li>abc </li>
              <li>abc </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>main</h5>
            <ul className="list-parts">
              <li>abc </li>
              <li>abc </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>main</h5>
            <ul className="list-parts">
              <li>abc </li>
              <li>abc </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>main</h5>
            <ul className="list-parts">
              <li>abc </li>
              <li>abc </li>
              <li>abc </li>
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
