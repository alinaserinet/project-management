import { GuestGuard, UserGuard } from '@common/guards';
import type { Router } from '@core';
import { RouterGenerator } from '@core';
import type { FC } from 'react';
import { lazy } from 'react';

const router: Router = {
  routes: [
    {
      path: '/auth/*',
      component: lazy(() => import('./pages/auth')),
      guards: [UserGuard],
    },
    {
      path: '/*',
      component: lazy(() => import('./pages/root')),
      guards: [GuestGuard],
    },
  ],
};

export const AppRouter: FC = () => {
  return <RouterGenerator router={router} />;
};
