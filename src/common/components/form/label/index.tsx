import styled from '@emotion/styled';
import type { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

import { labelStyles } from './label.styles';

interface LabelProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  htmlFor: string;
}

export const Label = styled.label<LabelProps>(labelStyles);
