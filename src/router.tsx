import type { FC } from 'react';
import { lazy } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/auth/*',
    Component: lazy(() => import('./pages/auth')),
  },
  {
    path: '/*',
    Component: lazy(() => import('./pages/root')),
  },
]);

export const Router: FC = () => {
  return <RouterProvider router={router} />;
};
