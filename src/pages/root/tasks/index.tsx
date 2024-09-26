import type { Router } from '@core';
import { RouterGenerator } from '@core';
import { SelectProjectGuard } from '@project';
import { lazy } from 'react';

const router: Router = {
  routes: [
    {
      path: '/create',
      component: lazy(() => import('./create')),
      guards: [SelectProjectGuard],
    },
  ],
};

const TasksRouter = () => {
  return <RouterGenerator router={router} />;
};

export default TasksRouter;
