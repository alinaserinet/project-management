import type { Project, ProjectPreview } from '@project/types';

import type {
  TransmissibleProject,
  TransmissibleProjectPreview,
} from './types';

export const projectPreviewTransformer = (
  project: TransmissibleProjectPreview,
): ProjectPreview => {
  return {
    name: project.name,
    id: project.id,
    description: project.description,
    createdAt: project.created_at,
  };
};

export const projectTransformer = (project: TransmissibleProject): Project => {
  return {
    name: project.name,
    id: project.id,
    description: project.description,
    createdAt: project.created_at,
  };
};
