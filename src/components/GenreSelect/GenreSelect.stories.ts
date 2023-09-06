import type { Meta, StoryObj } from '@storybook/react';

import GenreSelect from './GenreSelect';

const meta = {
  title: 'Module 1/GenreSelect',
  component: GenreSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GenreSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    movieList: ["Fantastic", "Horror", "Advanture"],
    selectedMovieName: 'Advanture',
    onSelect:(val) => console.log(val)
  },
};