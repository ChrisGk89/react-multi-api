import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { httpApi } from './httpApi';

// const rootReducer = combineReducers({
//   [nasaApi.reducerPath]: nasaApi.reducer,
//   [weatherApi.reducerPath]: weatherApi.reducer,
// });

export const store = configureStore({
  reducer: {
    [httpApi.reducerPath]: httpApi.reducer,
  },
  // @ts-ignore
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    httpApi.middleware,
  ],
});

// see setupListeners docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
