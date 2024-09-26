import { theme } from '@common/design';
import { css } from '@emotion/react';

export const tasksPreviewWrapperStyles = css({
  display: 'grid',
  gap: theme.spacing.medium,
  margin: '1.5rem 0',
  gridTemplateColumns: '1fr',

  [`@media (min-width: ${theme.breakpoints.md})`]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});

export const taskPreviewCardStyles = css({
  'fontSize': '0.8rem',
  'padding': '0',
  'overflow': 'hidden',
  '.header, .description, .meta': {
    padding: '0.75rem 1rem',
  },
  '.tools': {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'end',
  },
  '.header': {
    backgroundColor: theme.colors.light,
    borderRadius: 'inherit',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '.description': {
    color: theme.colors.muted,
    height: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  '.meta': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '.status': {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
