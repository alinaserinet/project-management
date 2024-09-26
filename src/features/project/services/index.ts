export * from './transformers';
export type * from './types';

import { userHttpClient } from '@common/clients';

import { ProjectService } from './project-service';

export const projectService = new ProjectService(userHttpClient, '/projects');
