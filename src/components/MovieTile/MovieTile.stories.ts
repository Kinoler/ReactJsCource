import type { Meta, StoryObj } from '@storybook/react';

import MovieTileModel from '../../models/MovieTileModel';
import MovieTile from './MovieTile';

const meta = {
  title: 'Module 3/MovieTile',
  component: MovieTile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MovieTile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    movieModel: new MovieTileModel(
        "https://images4.alphacoders.com/909/thumb-1920-909185.jpg", 
        'Avengers: War of Infinity', 
        2004, ['Drama', 
        'Biography', 
        'Music']),
    onClickCallback: (val) => console.log(val),
    onEditClickCallback: (val) => console.log(val),
    onDeleteClickCallback: (val) => console.log(val)
  },
};