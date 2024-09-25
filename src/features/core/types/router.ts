import type { Guard, LayoutComponent } from '@common/types';
import type { ComponentType } from 'react';

export interface Route {
  path: string;
  title?: string;
  description?: string;
  guards?: Guard[];
  component?: ComponentType | null;
}

export interface Router {
  routes: Route[];
  guards?: Guard[];
  layout?: LayoutComponent;
}
