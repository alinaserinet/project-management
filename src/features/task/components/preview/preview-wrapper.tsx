import { Loader } from '@common/components';
import type { FC, ReactNode } from 'react';

import { tasksPreviewWrapperStyles } from './preview.styles';

interface TasksPreviewWrapperProps {
  children: ReactNode;
  loading?: boolean;
}

export const TasksPreviewWrapper: FC<TasksPreviewWrapperProps> = ({
  children,
  loading,
}) => {
  if (loading) {
    return <Loader type="page" />;
  }

  return <div css={tasksPreviewWrapperStyles}>{children}</div>;
};
