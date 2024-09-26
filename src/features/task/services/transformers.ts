import type { Task, TaskPreview } from '@task/types';

import type { TransmissibleTask, TransmissibleTaskPreview } from './types';

export const taskPreviewTransformer = (
  task: TransmissibleTaskPreview,
): TaskPreview => {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    status: task.status,
    createdAt: task.created_at,
    project: {
      id: task.project_id,
    },
  };
};

export const taskTransformer = (task: TransmissibleTask): Task => {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    status: task.status,
    createdAt: task.created_at,
    project: {
      id: task.project_id,
    },
  };
};
