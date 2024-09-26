import { TaskPreviewCard, TasksPreviewWrapper } from '@task';
import { Link, useParams } from 'react-router-dom';

const SingleProject = () => {
  const { id } = useParams<'id'>();

  return (
    <div>
      <h1>single project</h1>
      <Link to={`/tasks/create?project=${id}`}>New Task</Link>
      <TasksPreviewWrapper>
        <TaskPreviewCard />
      </TasksPreviewWrapper>
    </div>
  );
};

export default SingleProject;
