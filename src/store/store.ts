import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReduser } from "./favorites/favorites.slice";
import { createLogger } from "redux-logger";
import { api } from "./api/api";
import { userSlice } from "./user/user.slice";

const logger = createLogger({
  collapsed: true,
});

const reducers = combineReducers({
  favorites: favoritesReduser,
  user: userSlice.reducer,
  [api.reducerPath]: api.reducer,
});
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
