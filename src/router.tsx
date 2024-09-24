import { GuestGuard, UserGuard } from '@common/guards';
import type { Route } from '@core';
import { RouterGenerator } from '@core';
import type { FC } from 'react';
import { lazy } from 'react';

const routes: Route[] = [
  {
    path: '/auth/*',
    component: lazy(() => import('./pages/auth')),
    guards: [GuestGuard],
  },
  {
    path: '/*',
    component: lazy(() => import('./pages/root')),
    guards: [UserGuard],
  },
];

export const Router: FC = () => {
  return <RouterGenerator routes={routes} />;
};
