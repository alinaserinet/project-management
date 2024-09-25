import type { FC, ReactNode } from 'react';

interface TasksPreviewWrapperProps {
  children: ReactNode;
}

export const TasksPreviewWrapper: FC<TasksPreviewWrapperProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};
