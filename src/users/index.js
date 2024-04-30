import React, { useEffect } from "react";
import { faker } from "@faker-js/faker";

import UsersList from "./UsersList";
import AddEditUser from "./AddEditUser";

import { getRandomId } from "./helper";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "users/setUsers", payload: initializeFakeUsers() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Generate fake user data in table
  const initializeFakeUsers = () => {
    const fakeUsers = new Array(50).fill(null).map(() => {
      return {
        id: getRandomId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
      };
    });
    return fakeUsers;
  };

  return (
    <div>
      <h1>User Management</h1>
      <UsersList />
      <ToastContainer />
      <AddEditUser />
    </div>
  );
}

export default Users;
