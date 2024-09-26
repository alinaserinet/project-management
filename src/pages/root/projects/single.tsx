import { SectionHeader, useSetPageTitle } from '@core';
import { projectService, useGetProject } from '@project';
import type { TaskPreview } from '@task';
import { TaskPreviewCard, TasksPreviewWrapper } from '@task';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProject = () => {
  const { id } = useParams<'id'>();
  const project = useGetProject(id);
  const setPageTitle = useSetPageTitle();

  const [tasks, setTasks] = useState<TaskPreview[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [_, setError] = useState<unknown>(null);

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

  return (
    <div>
      <SectionHeader
        title={`${project?.name} Tasks`}
        createPath={`/tasks/create?project=${project?.id}`}
        createTitle="New Task"
      />
      <TasksPreviewWrapper loading={loading}>
        {tasks.map(task => (
          <TaskPreviewCard key={task.id} task={task} />
        ))}
      </TasksPreviewWrapper>
    </div>
  );
};

export default SingleProject;
