import styled from '@emotion/styled';
import type { ReactNode } from 'react';

import { verticalGapWrapperStyles } from './vertical-gap-wrapper.styles';

interface VerticalGapWrapperProps {
  children: ReactNode;
}

export const VerticalGapWrapper = styled.div<VerticalGapWrapperProps>(
  verticalGapWrapperStyles,
);
