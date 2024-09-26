import type { Router } from '@core';
import { RouterGenerator } from '@core';
import { NoProjectParamGuard } from '@project';
import { lazy } from 'react';

const router: Router = {
  routes: [
    {
      path: '/',
      title: 'Projects',
      component: lazy(() => import('./list')),
    },
    {
      path: '/create',
      title: 'Create New Project',
      component: lazy(() => import('./create')),
    },
    {
      path: '/:id',
      component: lazy(() => import('./single')),
      guards: [NoProjectParamGuard],
    },
  ],
};

const ProjectsRouter = () => {
  return <RouterGenerator router={router} />;
};

export default ProjectsRouter;
