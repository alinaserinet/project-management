import type { ProjectPreview } from '@project/types';

import type { TransmissibleProjectPreview } from './types';

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
