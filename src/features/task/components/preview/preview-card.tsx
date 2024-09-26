import { Card } from '@common/components';
import type { TaskPreview } from '@task/types';
import type { FC } from 'react';

interface TaskPreviewCardProps {
  task: TaskPreview;
}

export const TaskPreviewCard: FC<TaskPreviewCardProps> = ({ task }) => {
  return (
    <Card>
      <div>
        <h3>{task.title}</h3>
      </div>
      <div>
        <h3>{task.description}</h3>
      </div>
      <div>
        <h3>{task.status}</h3>
      </div>
      <div>
        <h3>{task.date}</h3>
      </div>
    </Card>
  );
};
