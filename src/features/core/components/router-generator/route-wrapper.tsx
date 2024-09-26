import { isFinalRoute } from '@common/utils';
import { useSetPageDescription, useSetPageTitle } from '@core/hooks';
import type { Route } from '@core/types';
import type { FC } from 'react';
import { memo } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface RouteWrapperProps {
  route: Route;
}

const RouteWrapperComponent: FC<RouteWrapperProps> = ({ route }) => {
  const { component: Component, path, title, description } = route;
  const setPageTitle = useSetPageTitle();
  const setPageDescription = useSetPageDescription();
  const location = useLocation();

  const { pathname: currentPathname } = location;

  useEffect(() => {
    console.log(path);
    // if (!currentPathname?.includes(path)) return;
    if (!isFinalRoute(route)) return;

    if (title) {
      setPageTitle(title);
    }

    if (description) {
      setPageDescription(description);
    }

    return () => {
      setPageTitle(null);
      setPageDescription(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPathname]);

  if (!Component) return null;

  return <Component />;
};

export const RouteWrapper = memo<RouteWrapperProps>(RouteWrapperComponent);
