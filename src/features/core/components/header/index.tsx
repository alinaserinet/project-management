import { Button, Container } from '@common/components';
import { setAccessToken } from '@common/storages';
import { usePageItem } from '@core/hooks';
import { useNavigate } from 'react-router';

import { headerScaffoldStyles, headerStyles } from './header.styles';

export const MainHeader = () => {
  const pageTitle = usePageItem('title');
  const navigate = useNavigate();

  const handleLogout = () => {
    setAccessToken(null);
    navigate('/auth/login', { replace: true });
  };

  return (
    <header css={headerStyles}>
      <Container>
        <div css={headerScaffoldStyles}>
          <strong>{pageTitle ?? ''}</strong>
          <Button className="danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Container>
    </header>
  );
};
