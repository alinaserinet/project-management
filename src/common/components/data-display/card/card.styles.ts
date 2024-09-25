import { theme } from '@common/design';
import { css } from '@emotion/react';

export const cardStyles = css({
  'backgroundColor': theme.colors.surface,
  'color': theme.colors.text,
  'borderRadius': '8px',
  'border': `1px solid ${theme.colors.border}`,
  'padding': '16px',
  'margin': '16px 0',
  'transition': 'border-color 0.2s ease, transform 0.2s ease',
  '&:hover': {
    borderColor: theme.colors.primary,
    transform: 'translateY(-2px)',
  },
});
