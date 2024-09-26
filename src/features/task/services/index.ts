export * from './transformers';
export * from './types';

import { userHttpClient } from '@common/clients';

import { TaskService } from './task-service';

export const taskService = new TaskService(userHttpClient, '/tasks');
