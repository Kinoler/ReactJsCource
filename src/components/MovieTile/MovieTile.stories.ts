import type { Meta, StoryObj } from '@storybook/react';

import './../../styles.css';
import MovieDetailsModel from '../../models/MovieDetailsModel';
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
    movieModel: {
      ImageUrl: "https://images4.alphacoders.com/909/thumb-1920-909185.jpg", 
      MovieName: 'Avengers: War of Infinity', 
      ReleaseYear: 2004, 
      Rating: 5.6,
      Duration: new Date(new Date().setHours(4, 16, 43)),
      Description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives Of these seer-ningly unrelated people are vvoven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
      Genres: ['Horror'],
    },
    onClickCallback: (val) => console.log(val),
    onEditClickCallback: (val) => console.log(val),
    onDeleteClickCallback: (val) => console.log(val)
  },
};