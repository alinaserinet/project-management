import type { Store, UnknownAction } from '@reduxjs/toolkit';
import type { FC, ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

interface ProviderProps {
  children: ReactNode;
  store: Store<unknown, UnknownAction, unknown>;
}

export const Provider: FC<ProviderProps> = ({ children, store }) => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </ReduxProvider>
  );
};
