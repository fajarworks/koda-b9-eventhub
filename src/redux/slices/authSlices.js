import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: null,
  login: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
  },
  logout: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
  },
};

// const API_URL = import.meta.env.VITE_API_URL
export const loginUserThunk = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message || "login failed");
    }
  },
);

export const logoutUserThunk = createAsyncThunk(
  "auth/logout",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.auth?.data?.token;
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "logout failed");
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: (state) => {
      state.auth = null;
      state.login.isFulfilled = false;
      state.login.isPending = false;
      state.login.isRejected = false;
      state.login.error = null;
    },
  },
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(loginUserThunk, {
        pending: (state) => {
          state.login.isPending = true;
          state.login.isFulfilled = false;
          state.login.isRejected = false;
          state.login.error = null;
        },
        fulfilled: (state, { payload }) => {
          state.login.isPending = false;
          state.login.isFulfilled = true;
          state.login.isRejected = false;
          state.login.error = null;
          state.auth = payload;
        },
        rejected: (state, { payload }) => {
          state.login.isPending = false;
          state.login.isFulfilled = false;
          state.login.isRejected = true;
          state.login.error = payload;
        },
      })
      .addAsyncThunk(logoutUserThunk, {
        pending: (state) => {
          state.logout.isPending = true;
          state.logout.isFulfilled = false;
          state.logout.isRejected = false;
        },
        fulfilled: (state) => {
          state.logout.isFulfilled = true;
          state.logout.isRejected = false;
          state.auth = null;
          state.login = initialState.login;
        },
        rejected: (state, { payload }) => {
          state.logout.isFulfilled = false;
          state.logout.isRejected = true;
          state.logout.error = payload;
        },
      });
  },
});

export const { resetState } = authSlice.actions;
export default authSlice.reducer;
