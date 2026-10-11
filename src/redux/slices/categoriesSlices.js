import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: null,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

const API_URL = import.meta.env.VITE_API_URL;

export const getCategoriesThunk = createAsyncThunk(
  "categories/categories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}/category`, {
        method: "GET",
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }
      const data = res.json()
      return data
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder.addAsyncThunk(getCategoriesThunk, {
      pending: (state) => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
      },
      fulfilled: (state, { payload }) => {
        state.isPending = false;
        state.isFulfilled = true;
        state.categories = payload;
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

export default categoriesSlice.reducer