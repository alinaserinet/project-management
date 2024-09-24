import type { Route } from '@common/types';
import type { FC } from 'react';

interface RouteWrapperProps extends Route {}

export const RouteWrapper: FC<RouteWrapperProps> = ({
  component: Component,
}) => {
  if (!Component) return null;

  return <Component />;
};
