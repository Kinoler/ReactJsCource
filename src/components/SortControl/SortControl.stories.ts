import type { Meta, StoryObj } from '@storybook/react';

import SortControl from './SortControl';

const meta = {
  title: 'Module 3/SortControl',
  component: SortControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SortControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onSelect: (val) => console.log(val)
  },
};