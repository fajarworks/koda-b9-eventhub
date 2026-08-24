import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
  },
});

export const { addUser } = registerSlice.actions;

export default registerSlice.reducer;
