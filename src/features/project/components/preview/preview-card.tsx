import { Card } from '@common/components';
import type { ProjectPreview } from '@project/types';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface ProjectPreviewCardProps extends ProjectPreview {}

export const ProjectPreviewCard: FC<ProjectPreviewCardProps> = ({
  id,
  description,
  name,
}) => {
  return (
    <Card>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`/projects/${id}`}>Show Project</Link>
    </Card>
  );
};
