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
    {
      path: '/:id',
      title: 'project',
      component: lazy(() => import('./single')),
    },
  ],
};

const ProjectsRouter = () => {
  return <RouterGenerator router={router} />;
};

export default ProjectsRouter;
