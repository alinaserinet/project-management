import type { FC, ReactNode } from 'react';

import { projectsPreviewWrapperStyles } from './preview.styles';

interface PreviewWrapperProps {
  children: ReactNode;
}

export const ProjectsPreviewWrapper: FC<PreviewWrapperProps> = ({
  children,
}) => {
  return <div css={projectsPreviewWrapperStyles}>{children}</div>;
};
