import type { Meta, StoryObj } from '@storybook/react';

import { CreateTaskForm } from '.';

const meta = {
  title: 'tasks/create-form',
  component: CreateTaskForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['tasks'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CreateTaskForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    callback: '/projects',
    project: { id: 1 },
  },
};
