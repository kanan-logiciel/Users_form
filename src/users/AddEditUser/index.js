import React from "react";
import "./index.css";
import { Container, Form, InputGroup } from "react-bootstrap";

function AddEditUser() {
  return (
    <Container fluid>
      <div className="form-div">
        <Form>
          <InputGroup className="p-4">
            <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
            <Form.Control aria-label="Username" name="firstName" />
          </InputGroup>
          <InputGroup className="p-4">
            <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
            <Form.Control aria-label="Username" name="lastName" />
          </InputGroup>
          <InputGroup className="p-4">
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            <Form.Control aria-label="email" name="email" />
          </InputGroup>
          <InputGroup className="p-4">
            <InputGroup.Text id="basic-addon1">Country</InputGroup.Text>
            <Form.Select
              aria-label="Country"
              placeholder="select"
              name="country"
            ></Form.Select>
          </InputGroup>
          <InputGroup className="p-4">
            <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
            <Form.Control aria-label="phone" name="phone" />
          </InputGroup>
          <button className="btn btn-secondary">Cancel</button>
          &nbsp;&nbsp;
          <button className="form_group-btn btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </Container>
  );
}

export default AddEditUser;
