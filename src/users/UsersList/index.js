import "./index.css";
import React from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

function UsersList({ paginatedUsers }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: "users/deleteUser", payload: id });
  };

  const handleEdit = (user) => {
    dispatch({ type: "users/setSelectedUser", payload: user });
    dispatch({ type: "users/setShowAddEditUserForm", payload: true });
  };

  return (
    <Container fluid>
      <div className="content">
        <h2>User List</h2>

        <Modal show={false} onHide={() => {}}>
          <Modal.Header closeButton>
            <Modal.Title>User deleted!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            All data of user deleted successfully, user no more available.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => {}}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
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
                      onClick={() => handleEdit(null)}
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
            )}
          </tbody>
        </Table>
        <div className="pagination">
          {/* Pagination */}
          <nav>
            <ul className="pagination">{/* Pagination logic goes here */}</ul>
          </nav>
        </div>
      </div>
    </Container>
  );
}

export default UsersList;
