import type { Route } from '@common/types';

export const isGeneralRoute = (route: Route) => {
  const { path } = route;
  return path === '*' || path === '/*';
};
