import type { ID } from '@common/types';
import type { TaskStatus } from '@task/enums';

export interface TaskPreview {
  id: ID;
  title: string;
  description?: string;
  status: TaskStatus;
  project: {
    id: ID;
  };
  createdAt: number;
}
