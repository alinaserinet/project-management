import { NotFoundError } from '@common/components';
import type { Route as RouteType } from '@common/types';
import type { FC } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import { RouteWrapper } from './route-wrapper';
import { isGeneralRoute } from './utils';

interface RouterGeneratorProps {
  routes: RouteType[];
}

export const RouterGenerator: FC<RouterGeneratorProps> = ({ routes }) => {
  const hasGeneralPath = routes.find(isGeneralRoute);

  // add general path to handle not found error
  if (!hasGeneralPath) {
    routes.push({
      path: '*',
      title: 'not found',
      component: NotFoundError,
    });
  }

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {routes.map(route => (
          <Route
            path={route.path}
            element={<RouteWrapper {...route} />}
            key={route.path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
