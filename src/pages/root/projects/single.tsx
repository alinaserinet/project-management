import { TaskPreviewCard, TasksPreviewWrapper } from '@task';
import { Link } from 'react-router-dom';

const SingleProject = () => {
  return (
    <div>
      <h1>single project</h1>
      <Link to="/tasks/create?project=1">New Task</Link>
      <TasksPreviewWrapper>
        <TaskPreviewCard />
      </TasksPreviewWrapper>
    </div>
  );
};

export default SingleProject;
