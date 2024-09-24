import type { FC } from 'react';
import { useLocation } from 'react-router';

export const NotFoundError: FC = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <h1>Not Found</h1>
      <span>path: {pathname}</span>
    </div>
  );
};
