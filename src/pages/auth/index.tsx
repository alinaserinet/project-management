import { type Router, RouterGenerator } from '@core';
import { lazy } from 'react';

import { AuthLayout } from './layout';

const router: Router = {
  layout: AuthLayout,
  routes: [
    {
      path: '/login',
      title: 'Login',
      component: lazy(() => import('./login')),
    },
  ],
};

const AuthRouter = () => {
  return <RouterGenerator router={router} />;
};

export default AuthRouter;
