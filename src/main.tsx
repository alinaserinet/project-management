import { globalStyles } from '@common/styles';
import { Provider } from '@core';
import { Global } from '@emotion/react';
import { store } from '@store';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRouter } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={globalStyles} />
    <Provider store={store}>
      <Suspense fallback={<>loading</>}>
        <AppRouter />
      </Suspense>
    </Provider>
  </StrictMode>,
);
