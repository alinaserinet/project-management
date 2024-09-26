import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const CreateTask = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('project') as string;

  useEffect(() => {
    console.log(projectId);
  }, [projectId]);

  return (
    <div>
      <h1>Create Task</h1>
    </div>
  );
};

export default CreateTask;
