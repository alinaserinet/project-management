import type { FC } from 'react';
import type { GlobalError } from 'react-hook-form';

import { inputErrorStyles } from './input-error.styles';

interface InputErrorProps {
  error?: GlobalError;
}

export const InputError: FC<InputErrorProps> = ({ error }) => {
  if (!error?.message) return null;

  return <span css={inputErrorStyles}>{error.message}</span>;
};
