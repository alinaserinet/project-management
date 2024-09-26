import { Button, Card } from '@common/components';
import { useDeleteProject } from '@project/hooks';
import { projectService } from '@project/services';
import type { ProjectPreview } from '@project/types';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

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
    <Card>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`/projects/${id}`}>Show Project</Link>
      <Button onClick={handleDeleteProject}>Delete</Button>
    </Card>
  );
};
