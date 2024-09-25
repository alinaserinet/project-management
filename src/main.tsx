import { Loader } from '@common/components';
import { globalStyles } from '@common/design';
import { Provider } from '@core';
import { Global } from '@emotion/react';
import { store } from '@store';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRouter } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loader type="page" />}>
      <Global styles={globalStyles} />
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </Suspense>
  </StrictMode>,
);
