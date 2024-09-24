import type { Guard as GuardType } from '@common/types';
import type { FC, ReactNode } from 'react';

interface GuardsWrapperProps {
  guards?: GuardType[];
  children: ReactNode;
}

export const GuardsWrapper: FC<GuardsWrapperProps> = ({ guards, children }) => {
  if (!guards?.length) return children;

  let currentChild = children;

  guards.reverse().forEach(Guard => {
    currentChild = <Guard>{currentChild}</Guard>;
  });

  return currentChild;
};
