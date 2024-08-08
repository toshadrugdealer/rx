import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReduser } from "./favorites/favorites.slice";
import { userSlice } from "./user/user.slice";
import { api } from "./api/api";
import { createLogger } from "redux-logger";

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
