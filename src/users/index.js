import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

import UsersList from "./UsersList";
import AddEditUser from "./AddEditUser";

import { getRandomId } from "./helper";

function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddEditUserForm, setShowAddEditUserForm] = useState(false);

  const initializeFakeUsers = () => {
    const fakeUsers = new Array(5).fill(null).map(() => {
      return {
        id: getRandomId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
      };
    });

    setUsers(fakeUsers);
  };

  useEffect(() => {
    initializeFakeUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Delete selected user from list
   *
   * @param {String|Number} id
   */
  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);

    setUsers(updatedUsers);
  };

  /**
   * Handle > Click on Edit Action
   *
   * @param {Object} user
   */
  const onClickEdit = (user) => {
    setSelectedUser(user);
    setShowAddEditUserForm(true);
  };

  const onCancelAddEdit = () => {
    setSelectedUser(null);
    setShowAddEditUserForm(false);
  };

  const onSubmit = (formData) => {
    const addNewUser = () => {
      setUsers((prevUsers) => [
        ...prevUsers,
        {
          id: getRandomId(),
          ...formData,
        },
      ]);
    };

    const updateUser = () => {
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === selectedUser.id ? formData : u))
      );
    };

    selectedUser ? updateUser() : addNewUser();

    setSelectedUser(null);
    setShowAddEditUserForm(false);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UsersList
        users={users}
        onClickDelete={handleDeleteUser}
        onClickEdit={onClickEdit}
      />
      {showAddEditUserForm && (
        <AddEditUser
          user={selectedUser}
          onSubmit={onSubmit}
          onCancel={onCancelAddEdit}
        />
      )}
    </div>
  );
}

export default Users;