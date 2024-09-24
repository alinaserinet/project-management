import { RouterGenerator } from '@common/components';
import { GuestGuard, UserGuard } from '@common/guards';
import type { Route } from '@common/types';
import type { FC } from 'react';
import { lazy } from 'react';

const routes: Route[] = [
  {
    path: '/auth/*',
    component: lazy(() => import('./pages/auth')),
    guards: [UserGuard],
  },
  {
    path: '/*',
    component: lazy(() => import('./pages/root')),
    guards: [GuestGuard, UserGuard],
  },
];

export const Router: FC = () => {
  return <RouterGenerator routes={routes} />;
};
