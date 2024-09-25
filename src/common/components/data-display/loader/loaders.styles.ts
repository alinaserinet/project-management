import { theme } from '@common/design';
import { css, keyframes } from '@emotion/react';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const spinLoaderStyles = css({
  display: 'inline-block',
  width: '40px',
  height: '40px',
  border: '4px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '50%',
  borderTopColor: '#007BFF', // Use your theme's primary color
  animation: `${spinAnimation} 1s linear infinite`,
});

const bubbleFadeInOut = keyframes`
  0%, 80%, 100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

export const bubbleLoaderStyles = css({
  'color': theme.colors.info,
  'fontSize': '7px',
  'position': 'relative',
  'textIndent': '-9999em',
  'transform': 'translateZ(0)',
  'animationDelay': '-0.16s',
  '&, &::before, &::after': {
    borderRadius: '50%',
    width: '2.5em',
    height: '2.5em',
    animationFillMode: 'both',
    animation: `${bubbleFadeInOut} 1.8s infinite ease-in-out`,
  },
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
  },
  '&::before': {
    left: '-3.5em',
    animationDelay: '-0.32s',
  },
  '&::after': {
    left: '3.5em',
  },
});

export const pageLoaderWrapperStyles = css({
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
