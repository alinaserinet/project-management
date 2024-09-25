import {
  ProjectPreviewCard,
  ProjectsPreviewWrapper,
  useProjects,
  useProjectsStatus,
} from '@project';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  const projects = useProjects();
  const projectsStatus = useProjectsStatus();

  return (
    <div>
      <h1>projects</h1>
      <Link to="/projects/create">create</Link>
      <ProjectsPreviewWrapper status={projectsStatus}>
        {projects.map(({ id, description, name, createdAt }) => (
          <ProjectPreviewCard
            key={id}
            name={name}
            id={id}
            description={description}
            createdAt={createdAt}
          />
        ))}
      </ProjectsPreviewWrapper>
    </div>
  );
};

export default ProjectList;
