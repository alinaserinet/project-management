import type { Router } from '@core';
import { RouterGenerator } from '@core';
import { lazy } from 'react';

const router: Router = {
  routes: [
    {
      path: '/',
      title: 'projects',
      component: lazy(() => import('./list')),
    },
    {
      path: '/create',
      title: 'create project',
      component: lazy(() => import('./create')),
    },
  ],
};

const Root = () => {
  return <RouterGenerator router={router} />;
};

export default Root;
