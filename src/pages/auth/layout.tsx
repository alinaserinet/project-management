import { Container } from '@common/components';
import type { FC, ReactNode } from 'react';
import { memo } from 'react';

interface AuthLayoutProps {
  children?: ReactNode;
}

const AuthLayoutComponent: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export const AuthLayout = memo<AuthLayoutProps>(AuthLayoutComponent);
