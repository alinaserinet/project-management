import { Container } from '@common/components';
import { SectionHeader } from '@core';
import { CreateProjectForm } from '@project';

const CreateProject = () => {
  return (
    <div>
      <Container className="narrow">
        <SectionHeader title="Create New Project" />
        <CreateProjectForm callback="/projects" />
      </Container>
    </div>
  );
};

export default CreateProject;
