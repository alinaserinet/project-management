import { spinLoaderStyles } from './loaders.styles';

export const SpinLoader = () => {
  return <div css={spinLoaderStyles} role="status" aria-label="Loading" />;
};
