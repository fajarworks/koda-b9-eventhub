import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  getProfile: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
  },
  update: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
  },
};

export const profileUserThunk = createAsyncThunk(
  "user/profile",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.auth?.data?.token;
      const res = await fetch("http://localhost:8081/user/detail", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "login failed");
      }
      const data = await res.json();

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const ChangePasswordThunk = createAsyncThunk(
  "user/changePass",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.auth?.data.token;
      const res = await fetch("http://localhost:8081/user/change-password", {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok){
       const err = await res.json()
       throw new Error(err.message) 

      }
      const data = await res.json()
      return data
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder.addAsyncThunk(profileUserThunk, {
      pending: (state) => {
        state.getProfile.isPending = true;
        state.getProfile.isFulfilled = false;
        state.getProfile.isRejected = false;
      },
      fulfilled: (state, { payload }) => {
        state.getProfile.isPending = false;
        state.getProfile.isFulfilled = true;
        state.user = payload;
      },
      rejected: (state, { payload }) => {
        state.getProfile.isFulfilled = false;
        state.getProfile.isRejected = true;
        state.getProfile.error = payload;
      },
    });
  },
});

export default userSlice.reducer;
