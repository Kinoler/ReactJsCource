/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import SortControl from './SortControl';  // Путь до вашего файла компонента

describe('SortControl', () => {
    test('renders list of sorting items', () => {
        render(<SortControl onSelect={jest.fn()} />);

        expect(screen.getByText('Release Date')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();
    });

    test('can select a sort by item and call onSelect', () => {
        const mockOnSelect = jest.fn();

        render(<SortControl onSelect={mockOnSelect} />);

        const releaseDateItem = screen.getByText('Release Date');
        act(() => {
            userEvent.click(releaseDateItem);
        });
        

        expect(releaseDateItem).toHaveClass('li-selected');
        expect(mockOnSelect).toHaveBeenCalledWith('Release Date');
    });

    test('changes selected item upon multiple clicks', () => {
        render(<SortControl onSelect={jest.fn()} />);

        const releaseDateItem = screen.getByText('Release Date');
        const titleItem = screen.getByText('Title');

        act(() => {
            userEvent.click(releaseDateItem);
        });
        expect(releaseDateItem).toHaveClass('li-selected');
        expect(titleItem).not.toHaveClass('li-selected');

        act(() => {
            userEvent.click(titleItem);
        });

        expect(titleItem).toHaveClass('li-selected');
        expect(releaseDateItem).not.toHaveClass('li-selected');
    });

    test('does not call onSelect if same item is clicked twice', () => {
        const mockOnSelect = jest.fn();

        render(<SortControl onSelect={mockOnSelect} />);

        const releaseDateItem = screen.getByText('Release Date');

        act(() => {
            userEvent.click(releaseDateItem);
        });
        expect(mockOnSelect).toHaveBeenCalledTimes(1);

        act(() => {
            userEvent.click(releaseDateItem);
        });
        expect(mockOnSelect).toHaveBeenCalledTimes(1);
    });
});
