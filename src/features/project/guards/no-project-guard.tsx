import type { Guard } from '@common/types';
import { useGetProject } from '@project/hooks';
import { Navigate } from 'react-router';
import { useParams, useSearchParams } from 'react-router-dom';

export const NoProjectParamGuard: Guard = ({ children }) => {
  const { id: projectId } = useParams<'id'>();
  const project = useGetProject(projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return children ?? null;
};

export const NoProjectQueryGuard: Guard = ({ children }) => {
  const [searchParams] = useSearchParams();
  const projectParam = searchParams.get('project');
  const project = useGetProject(projectParam);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return children ?? null;
};
