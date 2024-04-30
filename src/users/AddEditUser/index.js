import "./index.css";
import React, { useEffect } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRandomId, notify } from "../helper";

// Initialize form data
const USER = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  phone: "",
};

function AddEditUser() {
  // Get state and dispatch from Redux
  const {
    showAddEditUserForm,
    selectedUser: user,
    formData,
    users,
  } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  // Set form data based on selected user
  useEffect(() => {
    if (!user) {
      dispatch({ type: "users/setFormData", payload: { ...USER } });
    } else {
      dispatch({ type: "users/setFormData", payload: { ...user } });
    }
  }, [user, dispatch]);

  // Handle form data changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: "users/setFormData",
      payload: { ...formData, [name]: value },
    });
  };

  // Handle form Cancellation
  const handleFormCancel = () => {
    dispatch({ type: "users/setShowAddEditUserForm", payload: false });
    dispatch({ type: "users/setIsDisabledButtons", payload: false });
  };

  // Handle form submission (add or update user)
  const onSubmit = (event) => {
    event.preventDefault();

    // Add new user
    const addNewUser = () => {
      dispatch({
        type: "users/setUsers",
        payload: [...users, { ...formData, id: getRandomId() }],
      });
      dispatch({ type: "users/setShowSuccessToast", payload: true });
    };

    // Update user
    const updateUser = () => {
      dispatch({
        type: "users/setUsers",
        payload: users.map((u) => (u.id === formData.id ? formData : u)),
      });
      dispatch({ type: "users/setShowSuccessToast", payload: true });
    };

    console.log(formData);
    formData.id ? updateUser() : addNewUser();

    dispatch({ type: "users/setSelectedUser", payload: null });
    dispatch({ type: "users/setFormData", payload: { ...USER } });
    dispatch({ type: "users/setShowAddEditUserForm", payload: false });
    dispatch({ type: "users/setIsDisabledButtons", payload: false });
  };

  return (
    <Container fluid>
      {showAddEditUserForm && (
        <div className="form-div">
          <h2>User Details:</h2>

          {/* Add/Edit form goes here  */}
          <Form onSubmit={onSubmit}>
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
            <button className="btn btn-secondary" onClick={handleFormCancel}>
              Cancel
            </button>
            &nbsp;&nbsp;
            <button
              className="form_group-btn btn btn-primary"
              type="submit"
              onClick={notify}
            >
              Submit
            </button>
          </Form>
        </div>
      )}
    </Container>
  );
}

export default AddEditUser;
