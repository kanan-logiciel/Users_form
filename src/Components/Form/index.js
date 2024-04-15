import "./index.css";
import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import InputMask from "react-input-mask";

// Function to render the form
function FormData() {
  const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [editedRowIndex, setEditedRowIndex] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = (index) => {
    console.log("handleEditClick", index);
    setEditedRowIndex(index);
    setNewRow(data[index]);
    setShowEditForm(true);
  };

  const submit = (event) => {
    event.preventDefault();

    if (
      newRow.firstName.trim() !== "" &&
      newRow.lastName.trim() !== "" &&
      newRow.email.trim() !== "" &&
      newRow.phone.trim() !== ""
    ) {
      if (editedRowIndex === null) {
        // Adding new row
        const randomId = Math.floor(Math.random() * 900) + 100;
        const newData = [...data, { ...newRow, id: randomId }];
        setData(newData);
      } else {
        // Editing existing row
        const updatedData = [...data];
        updatedData[editedRowIndex] = { ...newRow };
        setData(updatedData);
        setEditedRowIndex(null); // Reset editedRowIndex after editing
      }

      // Reset newRow
      setNewRow({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
      setShowEditForm(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewRow((prevRow) => ({
      ...prevRow,
      [name]: value,
    }));
  };

  // To delete selected row
  const deleteRow = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  // To cancel editing the row
  const cancelEdit = () => {
    setShowEditForm(false);
    setEditedRowIndex(null); // Reset editedRowIndex when canceling
    setNewRow({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  //To set selected country code accordingly
  const getPhoneMask = (countryCode) => {
    switch (countryCode) {
      case "1": // USA
        return "+1 (999) 999-9999";
      case "44": // UK
        return "+44 (999) 9999-9999";
      case "91": // IND
        return "+91 (9999) 999-999";
      case "63": // AUS
        return "+63 (999) 999-9999";
      default: // Default mask
        return "+ (999) 999-99-99";
    }
  };

  //to set selected country code
  const countries = [
    { code: "1", name: "USA" },
    { code: "44", name: "UK" },
    { code: "91", name: "IND" },
    { code: "63", name: "AUS" },
  ];

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);

    // Update the phone number input to include the selected country code
    setNewRow((prevRow) => ({
      ...prevRow,
      phone: `+${countryCode} ${prevRow.phone.split(" ")[1] || ""}`,
    }));
  };

  return (
    <Container fluid>
      <div>
        <Table striped bordered hover className="list-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.phone}</td>
                <td>{row.email}</td>
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
                    onClick={() => handleEditClick(index)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="6">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person-plus"
                    viewBox="0 0 16 16"
                    onClick={() => {
                      setEditedRowIndex(null);
                      setShowEditForm(true);
                    }}
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    <path
                      fillRule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="second-form">
          {showEditForm && (
            <Form onSubmit={submit}>
              <InputGroup className="p-4">
                <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
                <Form.Control
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={newRow.firstName}
                  name="firstName"
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup className="p-4">
                <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
                <Form.Control
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={newRow.lastName}
                  name="lastName"
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup className="p-4">
                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                <Form.Control
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  value={newRow.email}
                  name="email"
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup className="p-4">
                <InputGroup.Text id="basic-addon1">Country</InputGroup.Text>
                <Form.Select
                  aria-label="Country"
                  placeholder="select"
                  onChange={handleCountryChange}
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </Form.Select>
              </InputGroup>
              <InputGroup className="p-4">
                <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                <InputMask
                  mask={getPhoneMask(selectedCountry)}
                  value={newRow.phone}
                  name="phone"
                  onChange={handleChange}
                >
                  {(inputProps) => (
                    <Form.Control {...inputProps} placeholder="Phone Number" />
                  )}
                </InputMask>
              </InputGroup>
              <button className="btn btn-secondary" onClick={cancelEdit}>
                Cancel
              </button>
              &nbsp;&nbsp;
              <button className="form_group-btn btn btn-primary" type="submit">
                Submit
              </button>
            </Form>
          )}
        </div>
      </div>
      <br />
    </Container>
  );
}

export default FormData;
