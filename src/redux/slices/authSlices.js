import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: null,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const loginUserThunk = createAsyncThunk(
  "auth/login", async (payload, {rejectWithValue}) => {
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(payload)
        }, 1000)
      })
        return data
    } catch (err) {
      return rejectWithValue(err.message || "login failed")
}
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.auth = null;
    },
  },
  extraReducers: (builder) => {
    return builder.addAsyncThunk(loginUserThunk, {
      pending: (state) => {
        state.isPending = true
        state.isFulfilled = false
        state.isRejected = false
      },
      fulfilled: (state, {payload}) => {
        state.isPending = false
        state.auth = payload
      },
      rejected: (state, { payload }) => {
        state.isPending = false
        state.isFulfilled = false
        state.isRejected = true
        state.error = payload
      }
    })

  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
