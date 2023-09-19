import type { Meta, StoryObj } from '@storybook/react';

import './../../styles.css';
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
    sortByList: ["Fantastic", "Horror", "Advanture"],
    selectedSortBy: 'Advanture',
    onSelect: (val) => console.log(val)
  },
};