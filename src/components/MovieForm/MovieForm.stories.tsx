import type { Meta, StoryObj } from '@storybook/react';

import './../../styles.css';
import MovieForm from './MovieForm';
import MovieEditModel from '../../models/MovieEditModel';

const meta = {
  title: 'Module 4/MovieForm',
  component: MovieForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MovieForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    movieEditModel: new MovieEditModel(
        "Movie Title",
        "https://example.com/movie",
        "Action",
        "Movie overview text",
        "2023-08-31",
        8.5,
        "2h 15min"
    ),
    onSubmit: (val) => console.log(val)
  },
};