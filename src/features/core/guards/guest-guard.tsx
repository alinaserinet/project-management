import { getAccessToken } from '@common/storages';
import type { Guard } from '@common/types';
import { Navigate } from 'react-router';

export const GuestGuard: Guard = ({ children }) => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    return <Navigate to="/auth/login" replace />;
  }

  return children ?? null;
};
