import type { Router } from '@core';
import { RouterGenerator } from '@core';
import { lazy } from 'react';

const router: Router = {
  routes: [
    {
      path: '/create',
      component: lazy(() => import('./create')),
    },
  ],
};

const TasksRouter = () => {
  return <RouterGenerator router={router} />;
};

export default TasksRouter;
