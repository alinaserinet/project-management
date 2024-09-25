import { NotFoundError } from '@common/components';
import type { Router } from '@core/types';
import type { FC } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import { GuardsWrapper } from './guards-wrapper';
import { LayoutWrapper } from './layout-wrapper';
import { RouteWrapper } from './route-wrapper';
import { isGeneralRoute } from './utils';

interface RouterGeneratorProps {
  router: Router;
}

export const RouterGenerator: FC<RouterGeneratorProps> = ({ router }) => {
  const { routes, guards, layout } = router;

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
    <GuardsWrapper guards={guards}>
      <LayoutWrapper layout={layout}>
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
      </LayoutWrapper>
    </GuardsWrapper>
  );
};
