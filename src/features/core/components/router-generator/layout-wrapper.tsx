import type { LayoutComponent } from '@common/types';
import type { FC, ReactNode } from 'react';

interface LayoutWrapperProps {
  children: ReactNode;
  layout?: LayoutComponent;
}

export const LayoutWrapper: FC<LayoutWrapperProps> = ({
  children,
  layout: Layout,
}) => {
  if (!Layout) return children;

  return <Layout>{children}</Layout>;
};
