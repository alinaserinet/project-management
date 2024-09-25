import { Header } from '@core';
import type { FC, ReactNode } from 'react';

interface RootLayoutProps {
  children?: ReactNode;
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};
