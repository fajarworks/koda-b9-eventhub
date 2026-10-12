import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

const API_URL = import.meta.env.VITE_API_URL

export const registerUserThunk = createAsyncThunk(
  "user/register",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok){
        const err = await res.json()
        throw new Error(err.message || "failed to register")
      }
      const data = res.json()
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);



const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(registerUserThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          state.users.push(payload);
        },
        rejected: (state, { payload }) => {
          state.isFulfilled = false;
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
     
  },
});

export default registerSlice.reducer;
