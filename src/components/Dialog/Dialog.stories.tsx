import type { Meta, StoryObj } from '@storybook/react';

import './../../styles.css';
import Dialog from './Dialog';
import MovieForm from './../MovieForm/MovieForm';
import MovieEditModel from '../../models/MovieEditModel';

const meta = {
  title: 'Module 4/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClose:() => console.log(""),
    children: (<MovieForm movieEditModel={new MovieEditModel(
        "Movie Title",
        "https://example.com/movie",
        "Action",
        "Movie overview text",
        "2023-08-31",
        8.5,
        "2h 15min"
    )}
    onSubmit = {(val) => console.log(val)}/>),
    title: "Title"
  },
};

export const AddMovie: Story = {
  args: {
    onClose: () => console.log(""),
    children: (<MovieForm onSubmit = {(val) => console.log(val)}/>),
    title: "Add Movie"
  },
};

export const EditMovie: Story = {
  args: {
    onClose:() => console.log(""),
    children: (<MovieForm 
      movieEditModel={new MovieEditModel(
        "Movie Title",
        "https://example.com/movie",
        "Action",
        "Movie overview text",
        "2023-08-31",
        8.5,
        "2h 15min")}
      onSubmit = {(val) => console.log(val)}/>),
    title: "Edit Movie"
  },
};


export const DeleteMovie: Story = {
  args: {
    onClose:() => console.log(""),
    children: (<div style={{
      display: 'flex',
      flexDirection: 'column'}}><p>Are you sure you want to delete this movie?</p><div style={{alignSelf: 'flex-end'}}><button>Confirm</button></div></div>),
    title: (<div>Delete Movie</div>)
  },
};
