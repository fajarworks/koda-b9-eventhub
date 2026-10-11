import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  updateUser: null,
  userEvents: null,
  userCommunities: null,
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
  getEvents: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
  },
  getCommunities: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
  },
};

const API_URL = import.meta.env.VITE_API_URL;

export const profileUserThunk = createAsyncThunk(
  "user/profile",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.auth?.data?.token;
      const res = await fetch(`${API_URL}/user/detail`, {
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
      const res = await fetch(`${API_URL}/user/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
      return rejectWithValue(err.message);
    }
  },
);

export const updateUserThunk = createAsyncThunk(
  "user/update",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.auth?.data.token;
      const res = await fetch(`${API_URL}/user/update`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: payload,
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const getEventsUser = createAsyncThunk(
  "user/events",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.auth?.data.token;
      const res = await fetch(`${API_URL}/events/my-events`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const getCommunitiesUser = createAsyncThunk(
  "user/communites",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.auth?.data.token;
      const res = await fetch(`${API_URL}/communities/my-communities`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }
      const data = await res.json();
      return data;
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
    return builder
      .addAsyncThunk(profileUserThunk, {
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
      })
      .addAsyncThunk(updateUserThunk, {
        pending: (state) => {
          state.update.isPending = true;
          state.update.isFulfilled = false;
          state.update.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.update.isFulfilled = true;
          state.update.isPending = false;
          state.updateUser = payload;
        },
        rejected: (state, { payload }) => {
          state.update.isPending = false;
          state.update.isFulfilled = false;
          state.update.isRejected = true;
          state.update.error = payload;
        },
      })
      .addAsyncThunk(getEventsUser, {
        pending: (state) => {
          state.getEvents.isPending = true;
          state.getEvents.isFulfilled = false;
          state.getEvents.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.getEvents.isFulfilled = true;
          state.getEvents.isPending = false;
          state.userEvents = payload;
        },
        rejected: (state, { payload }) => {
          state.getEvents.isPending = false;
          state.getEvents.isFulfilled = false;
          state.getEvents.isRejected = true;
          state.getEvents.error = payload;
        },
      })
      .addAsyncThunk(getCommunitiesUser, {
        pending: (state) => {
          state.getCommunities.isPending = true;
          state.getCommunities.isFulfilled = false;
          state.getCommunities.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.getCommunities.isFulfilled = true;
          state.getCommunities.isPending = false;
          state.userCommunities = payload;
        },
        rejected: (state, { payload }) => {
          state.getCommunities.isPending = false;
          state.getCommunities.isFulfilled = false;
          state.getCommunities.isRejected = true;
          state.getCommunities.error = payload;
        },
      });
  },
});

export default userSlice.reducer;
