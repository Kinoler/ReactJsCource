import type { Meta, StoryObj } from '@storybook/react';

import './../../styles.css';
import MovieForm from './MovieForm';

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
    movieEditModel: {
      id: 0,
      poster_path: "https://images4.alphacoders.com/909/thumb-1920-909185.jpg", 
      title: 'Avengers: War of Infinity', 
      release_date: "2004", 
      vote_average: 5.6,
      runtime: 256,
      overview: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives Of these seer-ningly unrelated people are vvoven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
      genres: ['Horror'],
      budget: 0,
      revenue: 0,
      tagline: "",
      vote_count: 9
    },
    onSubmit: (val) => console.log(val)
  },
};