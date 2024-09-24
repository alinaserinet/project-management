import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { Router } from './router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<>loading</>}>
      <Router />
    </Suspense>
  </StrictMode>,
);
