import type { Meta, StoryObj } from '@storybook/react';

import SearchForm from './SearchForm';

const meta = {
  title: 'Module 1/SearchForm',
  component: SearchForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    initialSearch: "None", 
    onSearch: (val) => console.log(val)
  },
};