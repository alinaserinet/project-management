import type { Router } from '@core';
import { RouterGenerator } from '@core';
import { fetchProjects } from '@project';
import type { AppDispatch } from '@store';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
    {
      path: '/tasks/*',
      title: 'root',
      component: lazy(() => import('./tasks')),
    },
  ],
};

const RootRouter = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProjects());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <RouterGenerator router={router} />;
};

export default RootRouter;
