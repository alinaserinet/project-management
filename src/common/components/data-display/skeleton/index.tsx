import styled from '@emotion/styled';

import { skeletonStyles } from './skeleton.styles';

interface SkeletonProps {
  height?: string;
}

export const Skeleton = styled.div<SkeletonProps>(skeletonStyles);
