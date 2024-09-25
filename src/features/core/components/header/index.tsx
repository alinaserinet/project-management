import { Container } from '@common/components';
import { usePageItem } from '@core/hooks';

import { headerStyles } from './header.styles';

export const MainHeader = () => {
  const pageTitle = usePageItem('title');

  return (
    <header css={headerStyles}>
      <Container>
        <strong>{pageTitle ?? ''}</strong>
      </Container>
    </header>
  );
};
