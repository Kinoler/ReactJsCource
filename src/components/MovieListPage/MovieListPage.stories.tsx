import type { Meta, StoryObj } from '@storybook/react';

import './../../styles.css';
import MovieListPage from './MovieListPage';

const meta = {
  title: 'Module 5/MovieListPage',
  component: MovieListPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MovieListPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};