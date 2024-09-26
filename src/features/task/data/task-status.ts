import { TaskStatus } from '@task/enums';

const taskStatuses: Record<
  TaskStatus,
  {
    title: string;
    code: TaskStatus;
    color: 'danger' | 'info' | 'success';
  }
> = {
  [TaskStatus.ToDo]: {
    title: 'To Do',
    code: TaskStatus.ToDo,
    color: 'danger',
  },
  [TaskStatus.InProgress]: {
    title: 'InProgress',
    code: TaskStatus.InProgress,
    color: 'info',
  },
  [TaskStatus.Done]: {
    title: 'Done',
    code: TaskStatus.Done,
    color: 'success',
  },
};

export const getTaskStatus = (status: TaskStatus) => {
  return taskStatuses[status] ?? null;
};

export const getTaskStatusesArray = () => {
  return Object.values(taskStatuses);
};
