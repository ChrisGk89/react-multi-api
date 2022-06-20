import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { nasaApi } from "./nasaApi";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { weatherApi } from "./weatherApi";

// const rootReducer = combineReducers({
//   [nasaApi.reducerPath]: nasaApi.reducer,
//   [weatherApi.reducerPath]: weatherApi.reducer,
// });

export const store = configureStore({
  reducer: {
    [nasaApi.reducerPath]: nasaApi.reducer,
    // [weatherApi.reducerPath]: weatherApi.reducer,
  },
  // @ts-ignore
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    nasaApi.middleware,
  ],
});

// see setupListeners docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
