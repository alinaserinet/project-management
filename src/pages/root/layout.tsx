import { MainHeader } from '@core';
import type { FC, ReactNode } from 'react';

interface RootLayoutProps {
  children?: ReactNode;
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <div>{children}</div>
    </>
  );
};
