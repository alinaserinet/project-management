import { Provider } from '@common/components';
import { store } from '@store';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { Router } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<>loading</>}>
        <Router />
      </Suspense>
    </Provider>
  </StrictMode>,
);
