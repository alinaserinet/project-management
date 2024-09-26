import { Loader } from '@common/components';
import type { Guard } from '@common/types';
import { useGetProject, useProjectsStatus } from '@project/hooks';
import { Navigate } from 'react-router';
import { useParams, useSearchParams } from 'react-router-dom';

export const NoProjectParamGuard: Guard = ({ children }) => {
  const { id: projectId } = useParams<'id'>();
  const project = useGetProject(projectId);
  const projectsStatus = useProjectsStatus();

  if (projectsStatus !== 'fulfilled') {
    return <Loader type="page" />;
  }

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return children ?? null;
};

export const NoProjectQueryGuard: Guard = ({ children }) => {
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
