import { theme } from '@common/design';
import { css } from '@emotion/react';

export const headerStyles = css({
  backgroundColor: theme.colors.info,
  height: '3.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: theme.colors.light,
});

export const headerScaffoldStyles = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
