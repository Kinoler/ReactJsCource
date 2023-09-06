import type { Meta, StoryObj } from '@storybook/react';

import Counter from './Counter';

const meta = {
  title: 'Module 1/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    startValue: 5
  },
};