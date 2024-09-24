import type { Route } from '@core/types';

export const isGeneralRoute = (route: Route) => {
  const { path } = route;
  return path === '*' || path === '/*';
};
