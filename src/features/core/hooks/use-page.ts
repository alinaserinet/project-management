import { setDescription, setTitle } from '@core/slices';
import type { PageState } from '@core/types';
import type { StoreState } from '@store';
import { useDispatch, useSelector } from 'react-redux';

export const usePageItem = (key: keyof PageState) => {
  return useSelector<StoreState, string | null>(
    state => state.page[key] ?? null,
  );
};

export const useSetPageTitle = () => {
  const dispatch = useDispatch();
  return (title: string | null) => {
    dispatch(setTitle(title));
  };
};

export const useSetPageDescription = () => {
  const dispatch = useDispatch();
  return (description: string | null) => {
    dispatch(setDescription(description));
  };
};
