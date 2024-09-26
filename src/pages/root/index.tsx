import type { Router } from '@core';
import { RouterGenerator } from '@core';
import { fetchProjects, ProjectsStatusGuard } from '@project';
import type { AppDispatch } from '@store';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { RootLayout } from './layout';

const router: Router = {
  layout: RootLayout,
  guards: [ProjectsStatusGuard],
  routes: [
    {
      path: '/',
      title: 'Home',
      component: lazy(() => import('./home')),
    },
    {
      path: '/projects/*',
      component: lazy(() => import('./projects')),
    },
    {
      path: '/tasks/*',
      component: lazy(() => import('./tasks')),
    },
  ],
};

const RootRouter = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchProjects(controller.signal));
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <RouterGenerator router={router} />;
};

export default RootRouter;
