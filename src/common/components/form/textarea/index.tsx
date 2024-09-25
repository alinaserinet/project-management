import styled from '@emotion/styled';
import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

import { textAreaStyles } from './textarea.styles';

interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const Textarea = styled.textarea<TextareaProps>(textAreaStyles);
