import type { ID } from '@common/types';

export interface ProjectPreview {
  name: string;
  id: ID;
  description: string;
  createdAt: number;
}
