import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const getEventThunk = createAsyncThunk(
  "events/getEvents",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(payload);
        }, 2000);
      });
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const addJoinEventThunk = createAsyncThunk(
  "events/addJoinEvent",
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

export const removeJoinedEventThunk = createAsyncThunk(
  "events/unJoinedEvent",
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

export const addSaveEventThunk = createAsyncThunk(
  "events/addSaveEvent",
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

export const removeSavedEventThunk = createAsyncThunk(
  "events/removeSavedEvent",
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

const eventSlice = createSlice({
  name: "events",
  initialState,
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(getEventThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.events = payload;
          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(addJoinEventThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          const { eventId, userEmail } = payload;
          const event = state.events.find((event) => event.id === eventId);
          if (!event) return;
          if (!event.attendees.includes(userEmail)) {
            event.attendees.push(userEmail);
          }
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(addSaveEventThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          const { eventId, userEmail } = payload;
          const event = state.events.find((event) => event.id === eventId);
          if (!event) return;
          if (!event.userSaved.includes(userEmail)) {
            event.userSaved.push(userEmail);
          }
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(removeJoinedEventThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          const { eventId, userEmail } = payload;
          const event = state.events.find((event) => event.id === eventId);
          if (!event) return;
          event.attendees = event.attendees.filter(
            (email) => email !== userEmail,
          );
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(removeSavedEventThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          const { eventId, userEmail } = payload;
          const event = state.events.find((event) => event.id === eventId);
          if (!event) return;
          event.userSaved = event.userSaved.filter(
            (email) => email !== userEmail,
          );
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

export default eventSlice.reducer;
