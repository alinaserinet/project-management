import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
  devTools: import.meta.env.MODE !== 'production',
});

export type StoreState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
