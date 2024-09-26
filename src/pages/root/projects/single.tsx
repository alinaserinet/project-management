import { projectService } from '@project';
import type { TaskPreview } from '@task';
import { TaskPreviewCard, TasksPreviewWrapper } from '@task';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleProject = () => {
  const { id: projectId } = useParams<'id'>();
  const [tasks, setTasks] = useState<TaskPreview[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(true);

  useEffect(() => {
    if (!projectId) return;
    setLoading(true);
    projectService
      .getTasks(projectId)
      .finally(() => setLoading(false))
      .then(setTasks)
      .catch(setError);
  }, [projectId]);

  // eslint-disable-next-line no-console
  console.log(error);

  return (
    <div>
      <h1>single project</h1>
      <Link to={`/tasks/create?project=${projectId}`}>New Task</Link>
      <TasksPreviewWrapper loading={loading}>
        {tasks.map(({ id, description, title, project, status, createdAt }) => (
          <TaskPreviewCard
            key={id}
            id={id}
            description={description}
            title={title}
            project={project}
            status={status}
            createdAt={createdAt}
          />
        ))}
      </TasksPreviewWrapper>
    </div>
  );
};

export default SingleProject;
