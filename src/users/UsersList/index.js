import "./index.css";
import React from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function UsersList() {
  // Get state and dispatch from Redux
  const {
    users,
    isShowConfDelete,
    isDisabledButtons,
    currentPage,
    usersPerPage,
    userToDelete,
  } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // Handle delete confirmation
  const confirmDeleteModal = (id) => {
    dispatch({ type: "users/setUserToDelete", payload: id });
    dispatch({ type: "users/setIsShowConfDelete", payload: true });
  };

  // Handle deleting User data
  const deleteUserData = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    dispatch({ type: "users/setUsers", payload: updatedUsers });
    handleModalClose();
  };

  // Handle modal cancellation
  const handleModalClose = () => {
    dispatch({ type: "users/setUserToDelete", payload: null });
    dispatch({ type: "users/setIsShowConfDelete", payload: false });
  };

  // Handle edit button click (Show edit form)
  const isShowEditForm = (user) => {
    dispatch({ type: "users/setSelectedUser", payload: user });
    dispatch({ type: "users/setShowAddEditUserForm", payload: true });
    dispatch({ type: "users/setIsDisabledButtons", payload: true });
  };

  // Calculate current users based on pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Pagination
  const paginate = (pageNumber) => {
    dispatch({ type: "users/setCurrentPage", payload: pageNumber });
  };

  return (
    <Container fluid>
      <div className="content">
        <h2>User List</h2>

        {/* Modal goes here  */}
        <Modal show={isShowConfDelete} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={() => deleteUserData(userToDelete)}
            >
              Confirm Delete
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Table goes here  */}
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
            {currentUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => confirmDeleteModal(user.id)}
                    disabled={isDisabledButtons}
                  >
                    Delete
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-secondary"
                    onClick={() => isShowEditForm(user)}
                    disabled={isDisabledButtons}
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
                    onClick={() => isShowEditForm({})}
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
        <div className="pagination">
          {/* Pagination */}
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {/* Loop through page numbers */}
              {Array.from({
                length: Math.ceil(users.length / usersPerPage),
              }).map((_, index) => (
                <li key={index} className="page-item">
                  <button
                    className="page-link"
                    onClick={() => paginate(index + 1)}
                    disabled={currentPage === index + 1}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={
                    currentPage === Math.ceil(users.length / usersPerPage)
                  }
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
}

export default UsersList;
