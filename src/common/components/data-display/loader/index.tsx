import type { FC } from 'react';

import { BubbleLoader } from './bubble-loader';
import { PageLoader } from './page-loader';
import { SpinLoader } from './spin-loader';
import type { LoaderType } from './types';

interface LoaderProps {
  type?: LoaderType;
}

const loadersMap: Record<LoaderType, FC> = {
  bubble: BubbleLoader,
  spin: SpinLoader,
  page: PageLoader,
};

export const Loader: FC<LoaderProps> = ({ type = 'bubble' }) => {
  const Component = loadersMap[type];
  return <Component />;
};
