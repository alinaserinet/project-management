import { loginFormStyles } from '@auth/components/login-form/login-form.styles.ts';
import { Button, Card } from '@common/components';
import { setAccessToken } from '@common/storages';
import { useNavigate } from 'react-router';

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setAccessToken('token');
    navigate('/', { replace: true });
  };

  return (
    <Card css={loginFormStyles}>
      <Button className="success block" onClick={handleLogin}>
        Login
      </Button>
    </Card>
  );
};
