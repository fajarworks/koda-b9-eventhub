import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventDetail: null,
  joinedEventIds: [],
  savedEventIds: [],
  event: {
    title: "",
    capacity: 0,
    description: "",
    tags: [],
    date: "",
    location: "",
    community: "",
    startTime: "",
    endTime: "",
    speakers: [],
    attendees: [],
    userSaved: [],
    organizer: {
      name: "",
      community: "",
      avatar: "",
    },
  },
  upcomingEvent: [],
  events: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
  upcomingEvents: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
  },
  detailEvent: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
  },
  joinEvent: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
    data: null,
  },
  leaveEvent: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
    data: null,
  },
  saveEvent: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
    data: null,
  },
  removeSaveEvent: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
    data: null,
  },
};

const API_URL = import.meta.env.VITE_API_URL;
export const getEventThunk = createAsyncThunk(
  "events/getEvents",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}/events`);
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }
      const data = await res.json();
      return data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const joinedEventIdsThunk = createAsyncThunk(
  "events/joined",
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.auth?.data?.token;

    try {
      const res = await fetch(`${API_URL}/events/join`, {
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
      return data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);
export const savedEventIdsThunk = createAsyncThunk(
  "events/saved",
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.auth?.data?.token;

    try {
      const res = await fetch(`${API_URL}/events/save`, {
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

export const createEventThunk = createAsyncThunk(
  "events/createEvent",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const { events } = getState().events;

      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: events[events.length - 1].id + 1,
            ...payload,
          });
        }, 1000);
      });
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const JoinEventThunk = createAsyncThunk(
  "events/joinEvent",
  async (id, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.auth?.data?.token;
      const res = await fetch(`${API_URL}/events/${id}/join`, {
        method: "POST",
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

export const leaveEventThunk = createAsyncThunk(
  "events/leaveEvent",
  async (id, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.auth?.data?.token;
      const res = await fetch(`${API_URL}/events/${id}/leave`, {
        method: "DELETE",
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

export const upcomingEventsThunk = createAsyncThunk(
  "events/upcoming",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}/events/upcoming`);
      if (!res.ok) {
        const err = res.json();
        throw new Error(err.message || "failed fetch upcoming events");
      }
      const data = res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const detailEventThunk = createAsyncThunk(
  "events/detail",
  async (eventId, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}/events/${eventId}`);
      if (!res.ok) {
        const err = res.json();
        throw new Error(err.message || "failed fetch upcoming events");
      }
      const data = await res.json();
      return data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    updateEvent: (state, { payload }) => {
      state.event = {
        ...state.event,
        ...payload,
      };
    },
    addSpeaker: (state, { payload }) => {
      state.event.speakers.push(payload);
    },
    removeSpeaker: (state, { payload }) => {
      state.event.speakers = state.event.speakers.filter(
        (_, index) => index !== payload,
      );
    },
    resetEvent: (state) => {
      state.event = initialState.event;
    },
    resetJoinedEvents: (state) => {
      state.joinedEventIds = initialState.joinedEventIds;
    },
    resetSavedevents: (state) => {
      state.savedEventIds = initialState.savedEventIds;
    },
  },
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
      .addAsyncThunk(createEventThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.events.push(payload);
          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(JoinEventThunk, {
        pending: (state) => {
          state.joinEvent.isPending = true;
          state.joinEvent.isFulfilled = false;
          state.joinEvent.isRejected = false;
        },
        fulfilled: (state, action) => {
          state.joinEvent.isFulfilled = true;
          state.joinEvent.isPending = false;
          state.joinEvent.isRejected = false;
          const eventId = Number(action.meta.arg);
          if (
            Number.isInteger(eventId) &&
            !state.joinedEventIds.includes(eventId)
          ) {
            state.joinedEventIds.push(eventId);
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
      .addAsyncThunk(leaveEventThunk, {
        pending: (state) => {
          state.leaveEvent.isPending = true;
          state.leaveEvent.isFulfilled = false;
          state.leaveEvent.isRejected = false;
        },
        fulfilled: (state, action) => {
          state.leaveEvent.isPending = false;
          state.leaveEvent.isFulfilled = true;
          const eventId = Number(action.meta.arg);

          state.joinedEventIds = state.joinedEventIds.filter(
            (id) => Number(id) !== eventId,
          );
        },
        rejected: (state, { payload }) => {
          state.leaveEvent.isPending = false;
          state.leaveEvent.isFulfilled = false;
          state.leaveEvent.isRejected = true;
          state.leaveEvent.error = payload;
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
      })
      .addAsyncThunk(upcomingEventsThunk, {
        pending: (state) => {
          state.upcomingEvents.isPending = true;
          state.upcomingEvents.isFulfilled = false;
          state.upcomingEvents.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.upcomingEvents.isPending = false;
          state.upcomingEvents.isFulfilled = true;
          state.upcomingEvents.isRejected = false;
          state.upcomingEvent = payload;
        },
        rejected: (state, { payload }) => {
          state.upcomingEvents.isPending = false;
          state.upcomingEvents.isFulfilled = false;
          state.upcomingEvents.isRejected = true;
          state.upcomingEvents.error = payload;
        },
      })
      .addAsyncThunk(detailEventThunk, {
        pending: (state) => {
          state.detailEvent.isPending = true;
          state.detailEvent.isFulfilled = false;
          state.detailEvent.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.detailEvent.isPending = false;
          state.detailEvent.isFulfilled = true;
          state.detailEvent.isRejected = false;
          state.eventDetail = payload;
        },
        rejected: (state, { payload }) => {
          state.detailEvent.isPending = false;
          state.detailEvent.isFulfilled = false;
          state.detailEvent.isRejected = true;
          state.detailEvent.error = payload;
        },
      })
      .addAsyncThunk(joinedEventIdsThunk, {
        pending: () => {},
        fulfilled: (state, { payload }) => {
          state.joinedEventIds = payload;
        },
        rejected: () => {},
      });
  },
});

export const { updateEvent, addSpeaker, removeSpeaker, resetEvent, resetJoinedEvents } =
  eventSlice.actions;
export default eventSlice.reducer;
