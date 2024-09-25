import { Loader } from '@common/components';
import type { FC } from 'react';

import { pageLoaderWrapperStyles } from './page-loader.styles';

export const PageLoader: FC = () => {
  return (
    <div css={pageLoaderWrapperStyles}>
      <Loader type="bubble" />
    </div>
  );
};
