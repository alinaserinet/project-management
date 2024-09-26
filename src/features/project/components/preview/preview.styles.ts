import { theme } from '@common/design';
import { css } from '@emotion/react';

export const projectsPreviewWrapperStyles = css({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing.medium,
  margin: '1.5rem 0',

  [`@media (min-width: ${theme.breakpoints.md})`]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  [`@media (min-width: ${theme.breakpoints.lg})`]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  [`@media (min-width: ${theme.breakpoints.xl})`]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
});
