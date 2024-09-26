import type { Router } from '@core';
import { RouterGenerator } from '@core';
import { NoProjectQueryGuard } from '@project';
import { lazy } from 'react';

const router: Router = {
  routes: [
    {
      path: '/create',
      title: 'create task',
      component: lazy(() => import('./create')),
      guards: [NoProjectQueryGuard],
    },
  ],
};

const TasksRouter = () => {
  return <RouterGenerator router={router} />;
};

export default TasksRouter;
