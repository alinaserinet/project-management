import { Button } from '@common/components';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { ListHeaderWrapperStyles } from './list-header.styles';

interface ListHeaderProps {
  title?: string;
  createPath?: string;
  createTitle?: string;
}

export const SectionHeader: FC<ListHeaderProps> = ({
  createPath,
  title,
  createTitle,
}) => {
  return (
    <div css={ListHeaderWrapperStyles}>
      <h1>{title ?? ''}</h1>
      {createPath ? (
        <Link to={createPath}>
          <Button className="success">{createTitle ?? 'Create'}</Button>
        </Link>
      ) : null}
    </div>
  );
};
