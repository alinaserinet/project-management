import { SectionHeader } from '@core';
import {
  ProjectPreviewCard,
  ProjectsPreviewWrapper,
  useProjects,
  useProjectsStatus,
} from '@project';

const ProjectList = () => {
  const projects = useProjects();
  const projectsStatus = useProjectsStatus();

  return (
    <div>
      <SectionHeader
        title="Projects List"
        createPath="/projects/create"
        createTitle="New Project"
      />
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
