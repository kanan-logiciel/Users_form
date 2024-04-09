import "./index.css";
import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function FormData() {
  return (
    <Container fluid>
      <div>
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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>IND +12487</td>
              <td>
                <button className="btn btn-danger">Delete</button>
                &nbsp;&nbsp;
                <button className="btn btn-secondary">Edit</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>AUS +12487</td>
              <td>
                <button className="btn btn-danger">Delete</button>
                &nbsp;&nbsp;
                <button className="btn btn-secondary">Edit</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td>UK +12487</td>
              <td>
                <button className="btn btn-danger">Delete</button>
                &nbsp;&nbsp;
                <button className="btn btn-secondary">Edit</button>
              </td>
            </tr>
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
