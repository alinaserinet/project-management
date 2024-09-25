import { globalStyles } from '@common/design';
import { PageLoader, Provider } from '@core';
import { Global } from '@emotion/react';
import { store } from '@store';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRouter } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<PageLoader />}>
      <Global styles={globalStyles} />
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </Suspense>
  </StrictMode>,
);
