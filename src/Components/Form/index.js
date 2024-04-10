import "./index.css";
import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
function FormData() {
  const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const addRow = () => {
    if (
      newRow.firstName.trim() !== "" &&
      newRow.lastName.trim() !== "" &&
      newRow.email.trim() !== "" &&
      newRow.phone.trim() !== ""
    ) {
      const newData = [...data, { ...newRow, id: data.length + 1 }];
      setData(newData);
      setNewRow({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewRow((prevRow) => ({
      ...prevRow,
      [name]: value,
    }));
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
          <button className="form_group-btn" onClick={addRow}>
            Submit
          </button>
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
                <td>{index + 1}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                  &nbsp;&nbsp;
                  <button className="btn btn-secondary">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className=" second-form">
          <Form>
            <InputGroup className=" p-4">
              <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
              <Form.Control
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className=" p-4">
              <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
              <Form.Control
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className=" p-4">
              <InputGroup.Text id="basic-addon1">Email Name</InputGroup.Text>
              <Form.Control
                aria-label="email"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className=" p-4">
              <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
              <Form.Control
                aria-label="phone"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
        </div>
      </div>
      <br />
    </Container>
  );
}

export default FormData;
