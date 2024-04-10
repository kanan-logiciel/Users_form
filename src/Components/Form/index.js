import "./index.css";
import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

// Function to render the form
function FormData() {
  const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Function to show edit form
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  // Function to add new row
  const addRow = () => {
    if (
      newRow.firstName.trim() !== "" &&
      newRow.lastName.trim() !== "" &&
      newRow.email.trim() !== "" &&
      newRow.phone.trim() !== ""
    ) {
      const randomId = Math.floor(Math.random() * 900) + 100; // Generates a random 3-digit ID
      const newData = [...data, { ...newRow, id: randomId }];
      setData(newData);
      setNewRow({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    }
  };

  // Function to update the state with the new values
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewRow((prevRow) => ({
      ...prevRow,
      [name]: value,
    }));
  };

  // Function to delete row data from table
  const deleteRow = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const EditClick = () => {
    // Here you should fetch the data of the row you want to edit
    // and set it to newRow state
    // For example:
    const editedRowData = {
      /* Your edited row data from the table */
    };
    setNewRow(editedRowData);
  };

  return (
    <Container fluid>
      <div>
        <div className="content-form">
          <div className="form_group">
            <label>First Name*</label>
            <br />
            <input
              type="text"
              placeholder="your first name"
              value={newRow.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form_group">
            <label>Last Name:</label>
            <br />
            <input
              type="text"
              placeholder="your last name"
              value={newRow.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form_group">
            <label>Email:</label>
            <br />
            <input
              type="text"
              placeholder="your email"
              value={newRow.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form_group">
            <label>Phone:</label>
            <br />
            <input
              type="text"
              placeholder="your phone number"
              value={newRow.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
          <br />
          <button
            className="form_group-btn btn btn-primary"
            type="button"
            onClick={addRow}
          >
            Submit
          </button>
          <br />
          <br />
        </div>

        <Table striped bordered hover className="list-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteRow(index)}
                  >
                    Delete
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-secondary"
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className=" second-form">
          {showEditForm && (
            <Form>
              <InputGroup className=" p-4">
                <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
                <Form.Control
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={newRow.firstName}
                  name="firstName"
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup className=" p-4">
                <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
                <Form.Control
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={newRow.lastName}
                  name="lastName"
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup className=" p-4">
                <InputGroup.Text id="basic-addon1">Email Name</InputGroup.Text>
                <Form.Control
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  value={newRow.email}
                  name="email"
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup className=" p-4">
                <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                <Form.Control
                  aria-label="phone"
                  aria-describedby="basic-addon1"
                  value={newRow.phone}
                  name="phone"
                  onChange={handleChange}
                />
              </InputGroup>
              <Button variant="primary" onClick={EditClick}>
                Edit
              </Button>
            </Form>
          )}
        </div>
      </div>
      <br />
    </Container>
  );
}

export default FormData;
