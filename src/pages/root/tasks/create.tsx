import { Container } from '@common/components';
import { SectionHeader } from '@core';
import { CreateTaskForm } from '@task';
import { useSearchParams } from 'react-router-dom';

const CreateTask = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('project') as string;

  return (
    <div>
      <Container className="narrow">
        <SectionHeader title="Create New Task" />
        <CreateTaskForm
          callback={`/projects/${projectId}`}
          project={{ id: projectId }}
        />
      </Container>
    </div>
  );
};

export default CreateTask;
