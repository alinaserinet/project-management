import { RouterGenerator } from '@common/components';
import type { Route } from '@common/types';

const routes: Route[] = [
  { path: '/', component: () => <h1>root</h1>, title: 'root' },
];

const Root = () => {
  return <RouterGenerator routes={routes} />;
};

export default Root;
