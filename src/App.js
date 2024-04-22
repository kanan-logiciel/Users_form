import React, { useState, useEffect } from "react";
import "./App.css";
import { faker } from "@faker-js/faker";
import "bootstrap/dist/css/bootstrap.min.css";
import UsersList from "./users/UsersList";
import AddEditUser from "./users/AddEditUser";

function App() {
  // State to hold the list of users
  const [users, setUsers] = useState([]);

  // Fetch initial data (fake data for this example)
  useEffect(() => {
    const fakeUsers = new Array(50).fill(null).map((index) => {
      return {
        id: Math.floor(Math.random() * 900) + 100,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
      };
    });
    setUsers(fakeUsers);
  }, []);

  // Delete user function
  const onDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // State to handle form display and user for editing
  const [showEditForm, setShowEditForm] = useState(false);

  // state to hold the user being edited
  const [editingUser, setEditingUser] = useState(null);

  // Function to handle edit click
  const onEditClick = (user) => {
    setEditingUser(user);
    setShowEditForm(true);
  };

  const onSubmit = (formData) => {
    if (formData) {
      // Add new user
      setUsers((prevUsers) => [
        ...prevUsers,
        {
          id: Math.floor(Math.random() * 900) + 100,
          ...formData,
        },
      ]);
    } else {
      // Update user
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === editingUser.id ? formData : u))
      );
    }
    setEditingUser(null);
    setShowEditForm(false);
  };

  const onCancel = () => {
    setEditingUser(null);
    setShowEditForm(false);
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <UsersList
        users={users}
        onClickDelete={onDeleteUser}
        onClickEdit={onEditClick}
      />
      {showEditForm && (
        <AddEditUser
          user={editingUser}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      )}
    </div>
  );
}

export default App;
