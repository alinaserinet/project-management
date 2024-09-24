import { pageReducer } from '@core';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
  devTools: import.meta.env.MODE !== 'production',
});

export type StoreState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
