import type { ID } from '@common/types';
import { keyById } from '@common/utils';
import { projectService } from '@project/services';
import type { ProjectPreview, ProjectsState } from '@project/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialProjectsState: ProjectsState = {
  status: 'init',
  list: {},
};

export const fetchProjects = createAsyncThunk(
  'projects/fetch',
  (signal?: AbortSignal) => {
    return projectService.getAll(signal);
  },
);

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: initialProjectsState,
  reducers: {
    addProject: (state, action: PayloadAction<ProjectPreview>) => {
      const { id } = action.payload;
      state.list[id] = action.payload;
    },
    deleteProject: (state, action: PayloadAction<ID>) => {
      const id = action.payload;
      const { [id]: _, ...rest } = state.list;
      state.list = rest;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchProjects.pending, state => {
      state.status = 'pending';
      state.list = {};
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.list = keyById<ProjectPreview>(action.payload);
    });
    builder.addCase(fetchProjects.rejected, state => {
      state.status = 'rejected';
      state.list = {};
    });
  },
});
export const { addProject, deleteProject } = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
