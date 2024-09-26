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
