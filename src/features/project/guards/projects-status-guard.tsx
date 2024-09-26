import { Loader } from '@common/components';
import type { Guard } from '@common/types';
import { useProjectsStatus } from '@project';

export const ProjectsStatusGuard: Guard = ({ children }) => {
  const projectsStatus = useProjectsStatus();

  if (projectsStatus !== 'fulfilled') {
    return <Loader type="page" />;
  }

  return children ?? null;
};
