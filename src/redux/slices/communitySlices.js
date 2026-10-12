import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  communities: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
  joinedCommunityIds: [],
  popularCommunities: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
  },
  joinCommunity: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
  },
  leaveCommunity: {
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: null,
  },
};

// const import.meta.env.VITE_API_URL = import.meta.env.VITE_API_URL;

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
  async ({ communityId }, { rejectWithValue, getState }) => {
    const token = getState().auth.auth?.data?.token;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/communities/${communityId}/join`, {
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
export const GetJoinedCommunities = createAsyncThunk(
  "communities/joinedCommunityIds",
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.auth?.data?.token;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/communities/join`, {
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

export const leaveCommunitiesThunk = createAsyncThunk(
  "communities/leaveCommunities",
  async ({ communityId }, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.auth?.data?.token;
      const res = await fetch(`${import.meta.env.VITE_API_URL}/communities/${communityId}/leave`, {
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

export const popularCommunitiesThunk = createAsyncThunk(
  "communities/popularCommunities",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/communities/popular`);
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "failed to fetch popular communites");
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    resetCommunityIds: (state) => {
      state.joinedCommunityIds = [];
    },
  },
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(getCommunitiesThunk, {
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
          state.joinCommunity.isPending = true;
          state.joinCommunity.isFulfilled = false;
          state.joinCommunity.isRejected = false;
        },
        fulfilled: (state, action) => {
          state.joinCommunity.isPending = false;
          state.joinCommunity.isFulfilled = true;
          state.joinCommunity.isRejected = false;

          const communityId = Number(action.meta.arg.communityId);

          if (
            Number.isInteger(communityId) &&
            !state.joinedCommunityIds.includes(communityId)
          ) {
            state.joinedCommunityIds.push(communityId);
          }
        },
        rejected: (state, { payload }) => {
          state.joinCommunity.isRejected = true;
          state.joinCommunity.isPending = false;
          state.joinCommunity.isFulfilled = false;
          state.joinCommunity.error = payload;
        },
      })
      .addAsyncThunk(leaveCommunitiesThunk, {
        pending: (state) => {
          state.leaveCommunity.isPending = true;
          state.leaveCommunity.isFulfilled = false;
          state.leaveCommunity.isRejected = false;
        },
        fulfilled: (state, action) => {
          state.leaveCommunity.isPending = false;
          state.leaveCommunity.isFulfilled = true;
          state.leaveCommunity.isRejected = false;

          const communityId = Number(action.meta.arg.communityId);

          state.joinedCommunityIds = state.joinedCommunityIds.filter(
            (id) => Number(id) !== communityId,
          );
        },

        rejected: (state, { payload }) => {
          state.leaveCommunity.isPending = false;
          state.leaveCommunity.isFulfilled = false;
          state.leaveCommunity.isRejected = true;
          state.leaveCommunity.error = payload;
        },
      })
      .addAsyncThunk(popularCommunitiesThunk, {
        pending: (state) => {
          state.popularCommunities.isPending = true;
          state.popularCommunities.isFulfilled = false;
          state.popularCommunities.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.popularCommunities.isPending = false;
          state.popularCommunities.isFulfilled = true;
          state.popularCommunities.isRejected = false;
          state.communities = payload;
        },
        rejected: (state, { payload }) => {
          state.popularCommunities.isPending = false;
          state.popularCommunities.isFulfilled = false;
          state.popularCommunities.isRejected = true;
          state.popularCommunities.error = payload;
        },
      })
      .addAsyncThunk(GetJoinedCommunities, {
        pending: () => {},
        fulfilled: (state, { payload }) => {
          state.joinedCommunityIds = payload.data
            .filter((id) => id != null)
            .map(Number);
        },

        rejected: () => {},
      });
  },
});

export const { resetCommunityIds } = communitySlice.actions;
export default communitySlice.reducer;
