import styled from '@emotion/styled';
import type { ReactNode } from 'react';

import { cardStyles } from './card.styles';

interface CardProps {
  children: ReactNode;
}

export const Card = styled.div<CardProps>(cardStyles);
