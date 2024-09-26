import { Card } from '@common/components';
import type { TaskPreview } from '@task/types';
import type { FC } from 'react';

interface TaskPreviewCardProps extends TaskPreview {}

export const TaskPreviewCard: FC<TaskPreviewCardProps> = ({
  title,
  description,
  status,
  date,
}) => {
  return (
    <Card>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <h3>{description}</h3>
      </div>
      <div>
        <h3>{status}</h3>
      </div>
      <div>
        <h3>{date}</h3>
      </div>
    </Card>
  );
};
