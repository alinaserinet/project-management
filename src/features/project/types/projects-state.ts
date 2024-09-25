import type { FetchStatus } from '@common/types';

import type { ProjectPreview } from './project-preview';

export interface ProjectsState {
  status: FetchStatus;
  list: Record<string, ProjectPreview>;
}
