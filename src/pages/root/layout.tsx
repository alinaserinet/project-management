import { Container } from '@common/components';
import { MainHeader } from '@core';
import type { FC, ReactNode } from 'react';
import { memo } from 'react';

interface RootLayoutProps {
  children?: ReactNode;
}

const RootLayoutComponent: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export const RootLayout = memo<RootLayoutProps>(RootLayoutComponent);
