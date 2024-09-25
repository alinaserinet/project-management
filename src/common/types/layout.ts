import type { FC, ReactNode } from 'react';

interface LayoutComponentProps {
  children?: ReactNode;
}

export type LayoutComponent = FC<LayoutComponentProps>;
