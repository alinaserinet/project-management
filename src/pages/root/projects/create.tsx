import { CreateProjectForm } from '@project';

const CreateProject = () => {
  return (
    <div>
      <h1>Create Project</h1>
      <CreateProjectForm callback="/projects" />
    </div>
  );
};

export default CreateProject;
