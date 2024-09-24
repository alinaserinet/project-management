import type { Guard } from '@common/types';

export const GuestGuard: Guard = ({ children }) => {
  return children;
};
