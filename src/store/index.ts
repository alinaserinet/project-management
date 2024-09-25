import { pageReducer } from '@core';
import { projectsReducer } from '@project';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    projects: projectsReducer,
  },
  devTools: import.meta.env.MODE !== 'production',
});

export type StoreState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
