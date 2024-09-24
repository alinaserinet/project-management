import { useSetPageDescription, useSetPageTitle } from '@core/hooks';
import type { Route } from '@core/types';
import type { FC } from 'react';
import { useEffect } from 'react';

interface RouteWrapperProps extends Route {}

export const RouteWrapper: FC<RouteWrapperProps> = ({
  component: Component,
  path,
  title,
  description,
}) => {
  const setPageTitle = useSetPageTitle();
  const setPageDescription = useSetPageDescription();

  useEffect(() => {
    if (title) {
      setPageTitle(title);
    }

    if (description) {
      setPageDescription(description);
    }

    return () => {
      setPageTitle('');
      setPageDescription('');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  if (!Component) return null;

  return <Component />;
};
