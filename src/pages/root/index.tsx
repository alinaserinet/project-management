import type { Router } from '@core';
import { RouterGenerator } from '@core';

import { RootLayout } from './layout';

const router: Router = {
  layout: RootLayout,
  routes: [{ path: '/', component: () => <h1>root</h1>, title: 'root' }],
};

const Root = () => {
  return <RouterGenerator router={router} />;
};

export default Root;
