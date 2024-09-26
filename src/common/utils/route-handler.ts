import type { Route } from '@core';

export const isFinalRoute = (route: Route) => {
  return route.title || !route.path.includes('/*') || route.path.includes('/:');
};
