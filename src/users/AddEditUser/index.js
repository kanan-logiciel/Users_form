import React, { useState, useEffect } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";

import { getRandomId } from "../helper";
import "./index.css";

const USER = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  phone: "",
};

function AddEditUser({ user, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({ ...USER });

  useEffect(() => {
    if (user) setFormData({ ...USER, ...user });
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ id: getRandomId(), ...formData });
  };

  return (
    <Container fluid>
      <div className="form-div">
        <Form onSubmit={handleSubmit}>
          <InputGroup className="p-4">
            <InputGroup.Text>First Name</InputGroup.Text>
            <Form.Control
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="p-4">
            <InputGroup.Text>Last Name</InputGroup.Text>
            <Form.Control
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="p-4">
            <InputGroup.Text>Email</InputGroup.Text>
            <Form.Control
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="p-4">
            <InputGroup.Text>Country</InputGroup.Text>
            <Form.Control
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="p-4">
            <InputGroup.Text>Phone</InputGroup.Text>
            <Form.Control
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </InputGroup>
          <button className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
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
