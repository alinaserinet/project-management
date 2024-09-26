import { CreateTaskForm } from '@task';
import { useSearchParams } from 'react-router-dom';

const CreateTask = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('project') as string;

  return (
    <div>
      <h1>Create Task</h1>
      <CreateTaskForm
        callback={`/projects/${projectId}`}
        project={{ id: projectId }}
      />
    </div>
  );
};

export default CreateTask;
