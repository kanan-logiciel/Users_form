import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    selectedUser: null,
    showAddEditUserForm: false,
    isShowConfDelete: false,
    formData: {},
    isDisabledButtons: false,
    currentPage: 1,
    usersPerPage: 7,
    userToDelete: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setShowAddEditUserForm: (state, action) => {
      state.showAddEditUserForm = action.payload;
    },
    setIsShowConfDelete: (state, action) => {
      state.isShowConfDelete = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setIsDisabledButtons: (state, action) => {
      state.isDisabledButtons = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setUserToDelete: (state, action) => {
      state.userToDelete = action.payload;
    },
    clearUserToDelete: (state) => {
      state.userToDelete = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUsers,
  setSelectedUser,
  setShowAddEditUserForm,
  setIsShowConfDelete,
  setCurrentPage,
  setFormData,
  setIsDisabledButtons,
} = usersSlice.actions;

export default usersSlice.reducer;
