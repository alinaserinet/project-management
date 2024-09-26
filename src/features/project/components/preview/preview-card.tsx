import { Button, Card } from '@common/components';
import { textCutter } from '@common/utils';
import { useDeleteProject } from '@project/hooks';
import { projectService } from '@project/services';
import type { ProjectPreview } from '@project/types';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { projectsPreviewCardStyles } from './preview.styles';

interface ProjectPreviewCardProps extends ProjectPreview {}

export const ProjectPreviewCard: FC<ProjectPreviewCardProps> = ({
  id,
  description,
  name,
}) => {
  const deleteProject = useDeleteProject();

  const handleDeleteProject = async () => {
    await projectService.delete(id);
    deleteProject(id);
  };

  return (
    <Card css={projectsPreviewCardStyles}>
      <h3>{name}</h3>
      <p className="description">{textCutter(description)}</p>
      <div className="footer">
        <Link to={`/projects/${id}`}>
          <Button className="success">Show</Button>
        </Link>
        <Button onClick={handleDeleteProject} className="danger">
          Delete
        </Button>
      </div>
    </Card>
  );
};
