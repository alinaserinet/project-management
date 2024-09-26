import { Loader } from '@common/components';
import type { Guard } from '@common/types';
import { useGetProject, useProjectsStatus } from '@project/hooks';
import { Navigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export const SelectProjectGuard: Guard = ({ children }) => {
  const [searchParams] = useSearchParams();
  const projectParam = searchParams.get('project');
  const project = useGetProject(projectParam);
  const projectsStatus = useProjectsStatus();

  if (projectsStatus !== 'fulfilled') {
    return <Loader type="page" />;
  }

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return children ?? null;
};
