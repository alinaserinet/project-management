import {
  Button,
  Input,
  Label,
  Textarea,
  VerticalGapWrapper,
} from '@common/components';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ProjectInputSchema } from '@project/components/create-form/schemas.ts';
import { projectInputSchema } from '@project/components/create-form/schemas.ts';
import type { FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

export const CreateProjectForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectInputSchema>({
    resolver: zodResolver(projectInputSchema),
  });

  const handler: SubmitHandler<ProjectInputSchema> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handler)}>
      <VerticalGapWrapper>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register('name')} />
          <span>{errors?.name?.message}</span>
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" {...register('description')} />
          <span>{errors?.description?.message}</span>
        </div>
        <div>
          <Button>Save</Button>
        </div>
      </VerticalGapWrapper>
    </form>
  );
};
