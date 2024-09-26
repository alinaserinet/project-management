import {
  Button,
  Input,
  InputError,
  Label,
  Textarea,
  VerticalGapWrapper,
} from '@common/components';
import type { ID } from '@common/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskService } from '@task';
import type { FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import type { TaskInputSchema } from './schemas';
import { taskInputSchema } from './schemas';

interface CreateTaskFormProps {
  callback: string;
  project: { id: ID };
}

export const CreateTaskForm: FC<CreateTaskFormProps> = ({
  callback,
  project,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskInputSchema>({
    resolver: zodResolver(taskInputSchema),
  });

  const navigate = useNavigate();

  const handler: SubmitHandler<TaskInputSchema> = async data => {
    await taskService.create({
      title: data.title,
      description: data.description,
      project: { id: project.id },
      date: data.date,
    });
    reset();
    navigate(callback);
  };

  return (
    <form onSubmit={handleSubmit(handler)}>
      <VerticalGapWrapper>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register('title')} />
          <InputError error={errors?.title} />
        </div>
        <div>
          <Label htmlFor="name">Date</Label>
          <Input id="name" type="date" {...register('date')} />
          <InputError error={errors?.date} />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" {...register('description')} />
          <InputError error={errors?.description} />
        </div>
        <div>
          <Button>Save</Button>
        </div>
      </VerticalGapWrapper>
    </form>
  );
};
