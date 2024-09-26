import { theme } from '@common/design';
import { css } from '@emotion/react';
import { darken } from 'polished';

export const buttonStyles = css({
  'display': 'inline-block',
  'padding': '10px 20px',
  'fontSize': '16px',
  'fontWeight': '600',
  'lineHeight': '1.5',
  'color': theme.colors.light, // Assuming light color is for text on primary buttons
  'backgroundColor': theme.colors.primary,
  'border': `1px solid ${theme.colors.primary}`,
  'borderRadius': '4px',
  'textDecoration': 'none',
  'textAlign': 'center',
  'cursor': 'pointer',
  '&.block': {
    display: 'block',
    width: '100%',
  },
  'transition':
    'background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    backgroundColor: darken(0.05, theme.colors.primary), // Darken by 5%
    borderColor: darken(0.05, theme.colors.primary),
  },
  '&:active': {
    backgroundColor: darken(0.1, theme.colors.primary), // Darken by 10%
    borderColor: darken(0.1, theme.colors.primary),
  },
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 3px ${theme.colors.primary}33`, // 20% opacity
  },
  '&:disabled': {
    backgroundColor: theme.colors.muted,
    borderColor: theme.colors.muted,
    color: theme.colors.light,
    cursor: 'not-allowed',
    opacity: 0.65,
  },
  '&.success': {
    backgroundColor: theme.colors.success,
    borderColor: theme.colors.success,
  },
  '&.danger': {
    backgroundColor: theme.colors.danger,
    borderColor: theme.colors.danger,
  },
  '&.success:hover': {
    backgroundColor: darken(0.05, theme.colors.success), // Darken by 5%
    borderColor: darken(0.05, theme.colors.success),
  },
  '&.success:active': {
    backgroundColor: darken(0.1, theme.colors.success), // Darken by 10%
    borderColor: darken(0.1, theme.colors.success),
  },
  '&.danger:hover': {
    backgroundColor: darken(0.05, theme.colors.danger), // Darken by 5%
    borderColor: darken(0.05, theme.colors.danger),
  },
  '&.danger:active': {
    backgroundColor: darken(0.1, theme.colors.danger), // Darken by 10%
    borderColor: darken(0.1, theme.colors.danger),
  },
});
