import type { Route } from '@core';
import { RouterGenerator } from '@core';

const routes: Route[] = [
  { path: '/', component: () => <h1>root</h1>, title: 'root' },
];

const Root = () => {
  return <RouterGenerator routes={routes} />;
};

export default Root;
