import {
  Button,
  Input,
  InputError,
  Label,
  Textarea,
  VerticalGapWrapper,
} from '@common/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAddProject } from '@project/hooks';
import { projectService } from '@project/services';
import type { FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import type { ProjectInputSchema } from './schemas';
import { projectInputSchema } from './schemas';

interface CreateProjectFormProps {
  callback: string;
}

export const CreateProjectForm: FC<CreateProjectFormProps> = ({ callback }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectInputSchema>({
    resolver: zodResolver(projectInputSchema),
  });

  const addProject = useAddProject();
  const navigate = useNavigate();

  const handler: SubmitHandler<ProjectInputSchema> = async data => {
    const newProject = await projectService.create({
      name: data.name,
      description: data.description,
    });
    addProject(newProject);
    reset();
    navigate(callback, { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(handler)}>
      <VerticalGapWrapper>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register('name')} />
          <InputError error={errors?.name} />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" {...register('description')} />
          <InputError error={errors?.description} />
        </div>
        <div>
          <Button type="submit" className="success block">
            Create Project
          </Button>
        </div>
      </VerticalGapWrapper>
    </form>
  );
};
