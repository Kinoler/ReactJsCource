import type { Meta, StoryObj } from '@storybook/react';

import './../../styles.css';
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
    genreList: ["Fantastic", "Horror", "Advanture"],
    selectedGenre: 'Advanture',
    onSelect:(val) => console.log(val)
  },
};