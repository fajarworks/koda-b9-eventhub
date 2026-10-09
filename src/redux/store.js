import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import usersReducer from "./slices/registerSlices.js";
import authReducer from "./slices/authSlices.js";
import eventReducer from "./slices/eventSlices.js"
import communityReducer from "./slices/communitySlices.js"
import userReducer from "./slices/userSlices.js"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const persistUsersConfig = {
  key: "users",
  storage,
};

const persistAuthConfig = {
  key: "auth",
  storage,
  
}

const persistEventConfig = {
  key: "events",
  storage,

}

const persistCommunityConfig = {
  key: "communities",
  storage,
}

const store = configureStore({
  reducer: {
    users: persistReducer(persistUsersConfig, usersReducer),
    auth: persistReducer(persistAuthConfig, authReducer),
    events: persistReducer(persistEventConfig, eventReducer),
    communities: persistReducer(persistCommunityConfig, communityReducer ),
    user: userReducer
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
