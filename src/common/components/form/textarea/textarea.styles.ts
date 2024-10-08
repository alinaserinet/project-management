import { theme } from '@common/design';
import { css } from '@emotion/react';

export const textAreaStyles = css({
  'width': '100%',
  'display': 'block',
  'padding': '8px 12px',
  'fontSize': '16px',
  'lineHeight': '1.5',
  'color': theme.colors.text,
  'backgroundColor': theme.colors.background,
  'border': `1px solid ${theme.colors.border}`,
  'borderRadius': '4px',
  'outline': 'none',
  'resize': 'vertical', // Allow vertical resizing only
  'minHeight': '120px', // Set a minimum height
  'transition': 'border-color 0.2s ease, box-shadow 0.2s ease',
  '&:focus': {
    borderColor: theme.colors.primary,
    boxShadow: `0 0 0 3px ${theme.colors.primary}33`, // 20% opacity
  },
  '&::placeholder': {
    color: theme.colors.muted,
  },
  '&:disabled': {
    backgroundColor: theme.colors.light,
    color: theme.colors.muted,
    cursor: 'not-allowed',
  },
});
