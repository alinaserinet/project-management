import { useSetPageTitle } from '@core';
import { projectService, useGetProject } from '@project';
import type { TaskPreview } from '@task';
import { TaskPreviewCard, TasksPreviewWrapper } from '@task';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleProject = () => {
  const { id } = useParams<'id'>();
  const project = useGetProject(id);
  const setPageTitle = useSetPageTitle();

  const [tasks, setTasks] = useState<TaskPreview[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (!project) return;
    setPageTitle(project.name);
    const controller = new AbortController();
    setLoading(true);
    projectService
      .getTasks(project.id, controller.signal)
      .finally(() => setLoading(false))
      .then(setTasks)
      .catch(setError);

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project?.id]);

  // eslint-disable-next-line no-console
  console.log(error);

  return (
    <div>
      <h1>single project</h1>
      <Link to={`/tasks/create?project=${project?.id}`}>New Task</Link>
      <TasksPreviewWrapper loading={loading}>
        {tasks.map(task => (
          <TaskPreviewCard key={task.id} task={task} />
        ))}
      </TasksPreviewWrapper>
    </div>
  );
};

export default SingleProject;
