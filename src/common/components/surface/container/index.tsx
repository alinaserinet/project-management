import styled from '@emotion/styled';
import type { ReactNode } from 'react';

import { containerStyles } from './container.styles';

interface ContainerProps {
  children: ReactNode;
}

export const Container = styled.div<ContainerProps>(containerStyles);
