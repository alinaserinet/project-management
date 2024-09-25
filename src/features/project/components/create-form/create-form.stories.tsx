import type { Meta, StoryObj } from '@storybook/react';

import { CreateProjectForm } from '.';

const meta = {
  title: 'project/create-form',
  component: CreateProjectForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['project'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CreateProjectForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
