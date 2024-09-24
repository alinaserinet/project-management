import styled from '@emotion/styled';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { buttonStyles } from './button.styles';

export default {};
interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = styled.button<ButtonProps>(buttonStyles);
