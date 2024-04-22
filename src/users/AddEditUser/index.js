import React, { useState, useEffect } from "react";
import "./index.css";
import { Container, Form, InputGroup } from "react-bootstrap";

function AddEditUser({ user, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
  });

  // Set initial form data if user prop is provided
  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);
    onSubmit(formData);
  };

  return (
    <Container fluid>
      <div className="form-div">
        <Form onSubmit={handleSubmit}>
          <InputGroup className="p-4">
            <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
            <Form.Control
              aria-label="Username"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="p-4">
            <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
            <Form.Control
              aria-label="Username"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="p-4">
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            <Form.Control
              aria-label="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="p-4">
            <InputGroup.Text id="basic-addon1">Country</InputGroup.Text>
            <Form.Control
              aria-label="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="p-4">
            <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
            <Form.Control
              aria-label="Phone"
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
