import {
  Button,
  Input,
  Label,
  Textarea,
  VerticalGapWrapper,
} from '@common/components';
import type { FC } from 'react';

export const CreateProjectForm: FC = () => {
  return (
    <form>
      <VerticalGapWrapper>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" />
        </div>
        <div>
          <Button>Save</Button>
        </div>
      </VerticalGapWrapper>
    </form>
  );
};
