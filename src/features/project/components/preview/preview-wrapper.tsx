import { Loader } from '@common/components';
import type { FetchStatus } from '@common/types';
import type { FC, ReactNode } from 'react';

import { projectsPreviewWrapperStyles } from './preview.styles';

interface PreviewWrapperProps {
  children: ReactNode;
  status: FetchStatus;
}

export const ProjectsPreviewWrapper: FC<PreviewWrapperProps> = ({
  children,
  status,
}) => {
  if (status === 'pending') {
    return <Loader type="page" />;
  }

  return <div css={projectsPreviewWrapperStyles}>{children}</div>;
};
