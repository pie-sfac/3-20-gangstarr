import { keyframes } from 'styled-components';

export const keyframe = {
  fadeIn: keyframes`
  0% {
  opacity: 0;
  }
  100% {
    opacity: 1;
  }
  `,
  fadeOut: keyframes`
  0%{
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
  `,
};
