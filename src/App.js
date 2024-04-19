// import React, { useState, useEffect } from "react";
import "./App.css";
// import { faker } from "@faker-js/faker";
import "bootstrap/dist/css/bootstrap.min.css";
// import UsersList from "./users/UsersList";
// import AddEditUser from "./users/AddEditUser";
import Header from "./Components/Header";
import FormData from "./Components/Form";
import Footer from "./Components/Footer";

function App() {
  // // State to hold the list of users
  // const [users, setUsers] = useState([]);

  // // Fetch initial data (fake data for this example)
  // useEffect(() => {
  //   const fakeUsers = new Array(50).fill(null).map((index) => {
  //     return {
  //       id: Math.floor(Math.random() * 900) + 100,
  //       firstName: faker.person.firstName(),
  //       lastName: faker.person.lastName(),
  //       email: faker.internet.email(),
  //     };
  //   });
  //   setUsers(fakeUsers);
  // }, []);

  // // Delete user function
  // const deleteUser = (id) => {
  //   setUsers(users.filter((user) => user.id !== id));
  // };

  // // State to handle form display and user for editing
  // const [showForm, setShowForm] = useState(false);
  // const [userToEdit, setUserToEdit] = useState(null);

  return (
    <div className="App">
      {/* <h1>User Management</h1> */}
      {/* <UsersList users={users} onclickDelete={deleteUser} />
      <AddEditUser /> */}

      <Header />
      <FormData />
      <Footer />
    </div>
  );
}

export default App;
