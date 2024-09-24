import type { FC, ReactNode } from 'react';

interface GuardProps {
  children?: ReactNode;
}

export type Guard = FC<GuardProps>;
