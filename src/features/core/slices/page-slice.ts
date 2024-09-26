import type { PageState } from '@core/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialPageState: PageState = {
  title: null,
  description: null,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState: initialPageState,
  reducers: {
    setTitle: (state, action: PayloadAction<string | null>) => {
      document.title = action.payload ?? '';
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string | null>) => {
      state.description = action.payload;
    },
  },
});

export const { setTitle, setDescription } = pageSlice.actions;

export const pageReducer = pageSlice.reducer;
