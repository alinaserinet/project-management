import { ProjectPreviewCard, ProjectsPreviewWrapper } from '@project';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  return (
    <div>
      <h1>projects</h1>
      <ProjectsPreviewWrapper>
        <ProjectPreviewCard
          name="project one"
          id={1}
          description="test"
          createdAt={1233}
        />
        <ProjectPreviewCard
          name="project one"
          id={1}
          description="test"
          createdAt={1233}
        />
      </ProjectsPreviewWrapper>
      <Link to="/projects/create">create</Link>
    </div>
  );
};

export default ProjectList;
