import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import usersReducer from "./slices/registerSlices.js";
import authReducer from "./slices/authSlices.js";
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
  storage
}

const store = configureStore({
  reducer: {
    users: persistReducer(persistUsersConfig, usersReducer),
    auth: persistReducer(persistAuthConfig, authReducer)
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
