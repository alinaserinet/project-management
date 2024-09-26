import { Button, Card, VerticalGapWrapper } from '@common/components';
import { textCutter } from '@common/utils';
import { getTaskStatus, getTaskStatusesArray } from '@task/data';
import type { TaskStatus } from '@task/enums';
import { taskService } from '@task/services';
import type { TaskPreview } from '@task/types';
import type { FC } from 'react';
import { useState } from 'react';

import { taskPreviewCardStyles } from './preview.styles';

interface TaskPreviewCardProps {
  task: TaskPreview;
}

export const TaskPreviewCard: FC<TaskPreviewCardProps> = ({ task }) => {
  const [newTaskStatus, setNewTaskStatus] = useState<TaskStatus | null>(null);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const taskStatusTitle = getTaskStatus(newTaskStatus ?? task.status)?.title;
  const taskStatuses = getTaskStatusesArray();

  const handleChangeStatus = async (status: TaskStatus) => {
    await taskService.update({ ...task, status });
    setNewTaskStatus(status);
  };

  const handleDeleteTask = async () => {
    await taskService.delete(task.id);
    setIsDeleted(true);
  };

  if (isDeleted) return null;

  return (
    <Card css={taskPreviewCardStyles}>
      <VerticalGapWrapper>
        <div className="header">
          <h3 className="title">{task.title}</h3>
          <div className="tools">
            {taskStatuses.map(({ code, title, color }) => (
              <Button
                key={code}
                className={`small ${color}`}
                onClick={() => handleChangeStatus(code)}
              >
                {title}
              </Button>
            ))}
          </div>
        </div>
        <div className="description">
          <p>{textCutter(task.description ?? '')}</p>
        </div>
        <div className="meta">
          <span>{task.date}</span>
          <span className="status">{taskStatusTitle ?? ''}</span>
          <Button className="small danger" onClick={handleDeleteTask}>
            Delete Task
          </Button>
        </div>
      </VerticalGapWrapper>
    </Card>
  );
};
