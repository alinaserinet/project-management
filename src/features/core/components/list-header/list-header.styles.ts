import { theme } from '@common/design';
import { css } from '@emotion/react';

export const ListHeaderWrapperStyles = css({
  margin: '1rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${theme.colors.border}`,
  paddingBottom: '1rem',

  h1: {
    fontSize: '1.25rem',
  },
});
