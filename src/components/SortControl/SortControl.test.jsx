/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, fireEvent, screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import SortControl from './SortControl';  // Путь до вашего файла компонента

describe('SortControl', () => {
    test('SortControl renders correctly and selects a sorting option', () => {
        const onSelect = jest.fn();
      
        render(<SortControl onSelect={onSelect} />);
      
        expect(screen.getByText('Sort by:')).toBeInTheDocument();
      
        fireEvent.click(screen.getByText('Release Date'));

        expect(screen.getAllByText('Release Date')[0]).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();
      
        expect(screen.queryAllByText('Release Date')[1]).toHaveClass('dropdown-item-selected');
        expect(screen.queryByText('Title')).not.toHaveClass('dropdown-item-selected');
      
        fireEvent.click(screen.getAllByText('Release Date')[1]);
      
        expect(onSelect).toHaveBeenCalledWith('Release Date');
      
        fireEvent.click(screen.getByText('Release Date'));

        expect(screen.getAllByText('Release Date')[1]).toHaveClass('dropdown-item-selected');
        expect(screen.queryByText('Title')).not.toHaveClass('dropdown-item-selected');
      
        fireEvent.click(screen.getByText('Title'));
      
        expect(onSelect).toHaveBeenCalledWith('Title');
      
        fireEvent.click(screen.getByText('Title'));

        expect(screen.getAllByText('Release Date')[0]).not.toHaveClass('dropdown-item-selected');
        expect(screen.getAllByText('Title')[1]).toHaveClass('dropdown-item-selected');
      });
});
