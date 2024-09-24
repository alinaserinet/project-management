import { NotFoundError } from '@common/components';
import { GuardsWrapper } from '@common/components/base/router-generator/guards-wrapper.tsx';
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
  const hasGeneralRoute = routes.find(isGeneralRoute);

  // add general route to handle not found error
  if (!hasGeneralRoute) {
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
            element={
              <GuardsWrapper guards={route.guards}>
                <RouteWrapper {...route} />
              </GuardsWrapper>
            }
            key={route.path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
