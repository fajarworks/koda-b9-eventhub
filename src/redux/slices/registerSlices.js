import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const registerUserThunk = createAsyncThunk(
  "user/register",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:8081/auth/register", {
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

export const updateUserThunk = createAsyncThunk(
  "user/update",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(payload);
        }, 1000);
      });
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
      .addAsyncThunk(updateUserThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          const index = state.users.findIndex((u) => u.email === payload.email);
          if (index !== -1) {
            state.users[index] = { ...state.users[index], ...payload };
          }
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = false;
          state.isRejected = true;
          state.error = payload;
        },
      });
  },
});

export default registerSlice.reducer;
