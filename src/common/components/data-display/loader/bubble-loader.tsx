import { bubbleLoaderStyles } from './loaders.styles';

export const BubbleLoader = () => {
  return <span css={bubbleLoaderStyles} role="status" aria-label="Loading" />;
};
