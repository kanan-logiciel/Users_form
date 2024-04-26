import React, { useEffect } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import { getRandomId } from "../helper";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";

const USER = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  phone: "",
};

function AddEditUser() {
  const { selectedUser: user, formData } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "users/setFormData", payload: { ...USER } });
  }, [user, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "users/setFormData", payload: { [name]: value } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "users/setFormData",
      payload: { ...user, id: getRandomId() },
    });
  };

  const handleCancel = () => {
    dispatch({ type: "users/setSelectedUser", payload: null });
    dispatch({ type: "users/setShowAddEditUserForm", payload: false });
  };

  return (
    <Container fluid>
      <div className="form-div">
        <h2>User Details:</h2>
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
          <button className="btn btn-secondary" onClick={handleCancel}>
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
