import { theme } from '@common/design';
import { css } from '@emotion/react';
import { darken } from 'polished';

export const skeletonStyles = css({
  'backgroundColor': theme.colors.light,
  'borderRadius': '8px',
  'width': '100%',
  'height': '4rem',
  'animation': 'pulse 1.5s infinite ease-in-out',
  '@keyframes pulse': {
    '0%': {
      backgroundColor: theme.colors.light,
    },
    '50%': {
      backgroundColor: darken(0.01, theme.colors.light),
    },
    '100%': {
      backgroundColor: theme.colors.light,
    },
  },
});
