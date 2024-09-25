import type { Router } from '@core';
import { RouterGenerator } from '@core';
import { lazy } from 'react';

import { RootLayout } from './layout';

const router: Router = {
  layout: RootLayout,
  routes: [
    {
      path: '/',
      title: 'home',
      component: lazy(() => import('./home')),
    },
    {
      path: '/projects/*',
      title: 'root',
      component: lazy(() => import('./projects')),
    },
  ],
};

const Root = () => {
  return <RouterGenerator router={router} />;
};

export default Root;
