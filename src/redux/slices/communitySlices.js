import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  communities: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const getCommunitiesThunk = createAsyncThunk(
  "communities/getCommunities",
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

export const JoinCommunitiesThunk = createAsyncThunk(
  "communities/joinCommunities",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(payload);
        }, 1000);
      });
      return data
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const unJoinedCommunitiesThunk = createAsyncThunk(
  "communities/unjoinedCommunities",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(payload);
        }, 1000);
      });
      return data
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder.addAsyncThunk(getCommunitiesThunk, {
      pending: (state) => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
      },
      fulfilled: (state, { payload }) => {
        state.isPending = false;
        state.communities = payload;
        state.isFulfilled = true;
      },
      rejected: (state, { payload }) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = payload;
      },
    })
      .addAsyncThunk(JoinCommunitiesThunk, {
        pending: (state) => {
          state.isPending = true
          state.isFulfilled = false
          state.isRejected = false
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false
          const { communityId, userEmail } = payload
          const community = state.communities.find((com) => com.id === communityId)
          if (!community) return
          if (!community.members.includes(userEmail)) {
            community.members.push(userEmail)
          }
        },
        rejected: (state, { payload }) => {
          state.isRejected = true
          state.isPending = false
          state.isFulfilled = false
          state.error = payload
        }
      })
      .addAsyncThunk(unJoinedCommunitiesThunk, {
        pending: (state) => {
          state.isPending = true
          state.isFulfilled = false
          state.isRejected = false
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false
          const { communityId, userEmail } = payload
          const community = state.communities.find(com => com.id === communityId)
          if (!community) return
          community.members = community.members.filter(email => email !== userEmail)

        },
        rejected: (state, { payload }) => {
          state.isPending = false
          state.isFulfilled = false
          state.isRejected = true
          state.error = payload
        }
      })
  },
});

export default communitySlice.reducer;
