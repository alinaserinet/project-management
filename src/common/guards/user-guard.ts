import type { Guard } from '@common/types';

export const UserGuard: Guard = ({ children }) => {
  return children;
};
