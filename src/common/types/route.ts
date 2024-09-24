import type { ComponentType } from 'react';

import type { Guard } from './guard';

export interface Route {
  path: string;
  title?: string;
  description?: string;
  guards?: Guard[];
  component?: ComponentType | null;
}
