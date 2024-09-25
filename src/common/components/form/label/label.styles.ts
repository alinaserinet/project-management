import { theme } from '@common/design';
import { css } from '@emotion/react';

export const labelStyles = css({
  display: 'block',
  marginBottom: '0.25rem',
  fontSize: '16px',
  fontWeight: '500',
  color: theme.colors.text,
  lineHeight: '1.5',
  cursor: 'pointer',
});
