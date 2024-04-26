import React, { useEffect } from "react";
import { faker } from "@faker-js/faker";

import UsersList from "./UsersList";
import AddEditUser from "./AddEditUser";

import { getRandomId } from "./helper";
import { useDispatch, useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "users/setUsers", payload: initializeFakeUsers() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    dispatch({ type: "users/setIsShowConfDelete", payload: false });
  };

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

  /**
   * Delete selected user from list
   *
   * @param {String|Number} id
   */
  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);

    dispatch({ type: "users/setUsers", payload: updatedUsers });
    dispatch({ type: "users/setIsShowConfDelete", payload: true });
  };

  /**
   * Handle > Click on Edit Action
   *
   * @param {Object} user
   */
  const onClickEdit = (user) => {
    dispatch({ type: "users/setSelectedUser", payload: user });
    dispatch({ type: "users/setShowAddEditUserForm", payload: true });
  };

  const onCancelAddEdit = () => {
    dispatch({ type: "users/setSelectedUser", payload: null });
    dispatch({ type: "users/setShowAddEditUserForm", payload: false });
  };

  const onSubmit = (formData) => {
    const addNewUser = () => {
      dispatch({
        type: "users/setUsers",
        payload: [...users, formData],
        id: getRandomId(),
      });
    };

    const updateUser = () => {
      dispatch({
        type: "users/setUsers",
        payload: [...users, formData],
      });
    };

    dispatch({ type: "users/setSelectedUser", payload: null })
      ? updateUser()
      : addNewUser();

    dispatch({ type: "users/setSelectedUser", payload: null });
    dispatch({ type: "users/setShowAddEditUserForm", payload: false });
  };

  // Disable buttons
  const disableButtons = () => {
    dispatch({ type: "users/setShowAddEditUserForm", payload: false });
  };

  // Pagination
  // const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const paginate = (array, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return array.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(users.length / itemsPerPage);

  dispatch({
    type: "users/setCurrentPage",
    payload: paginate(users, itemsPerPage),
  });

  return (
    <div>
      <h1>User Management</h1>
      <UsersList
        paginatedUsers={users}
        onClickDelete={handleDeleteUser}
        onClickEdit={onClickEdit}
        ondisableButtons={disableButtons}
        handleClose={handleClose}
        // show={users}
        totalPages={totalPages}
        setCurrentPage={users}
        currentPage={users}
      />
      {users && (
        <AddEditUser
          user={users}
          // onSubmit={onSubmit}
          // onCancel={onCancelAddEdit}
        />
      )}
    </div>
  );
}

export default Users;
