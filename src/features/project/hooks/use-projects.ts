import type { FetchStatus, ID } from '@common/types';
import { addProject } from '@project/slices';
import type { ProjectPreview } from '@project/types';
import type { StoreState } from '@store';
import { useDispatch, useSelector } from 'react-redux';

export const useProjects = () => {
  const projectRecords = useSelector<StoreState, Record<ID, ProjectPreview>>(
    state => state.projects.list,
  );
  return Object.values(projectRecords);
};

export const useProjectsStatus = () => {
  return useSelector<StoreState, FetchStatus>(state => state.projects.status);
};

export const useGetProject = (id?: ID | null) => {
  return useSelector<StoreState, ProjectPreview | null>(state =>
    id ? state.projects.list[id] : null,
  );
};

export const useAddProject = () => {
  const dispatch = useDispatch();
  return (project: ProjectPreview) => {
    dispatch(addProject(project));
  };
};
