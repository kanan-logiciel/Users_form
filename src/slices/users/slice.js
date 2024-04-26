import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    selectedUser: null,
    showAddEditUserForm: false,
    isShowConfDelete: false,
    currentPage: 1,
    formData: {},
  },
  reducers: {
    setUsers: (state, action) => {
      // console.log(action);
      state.users = action.payload;
    },
    setSelectedUser: (state, action) => {
      // console.log(action);
      state.selectedUser = action.payload;
    },
    setShowAddEditUserForm: (state, action) => {
      // console.log(action);
      state.showAddEditUserForm = action.payload;
    },
    setIsShowConfDelete: (state, action) => {
      // console.log(action);
      state.isShowConfDelete = action.payload;
    },
    setCurrentPage: (state, action) => {
      // console.log(action);
      state.currentPage = action.payload;
    },
    setFormData: (state, action) => {
      // console.log(action);
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
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
} = usersSlice.actions;

export default usersSlice.reducer;
