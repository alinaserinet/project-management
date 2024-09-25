import styled from '@emotion/styled';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { inputStyles } from './input.styles';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = styled.input<InputProps>(inputStyles);
