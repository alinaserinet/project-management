import type { ID } from '@common/types';
import type { TaskStatus } from '@task/enums';

export interface TransmissibleTaskPreview {
  id: ID;
  title: string;
  description?: string;
  status: TaskStatus;
  project_id: ID;
  created_at: number;
}

export interface TransmissibleTask extends TransmissibleTaskPreview {}
