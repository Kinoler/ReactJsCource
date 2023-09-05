import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Dialog from './Dialog';  // Путь до вашего файла компонента

describe('Dialog', () => {
  test('renders correctly with given content and title', () => {
    render(
      <Dialog title="Test Dialog" onClose={jest.fn()}>
        <div>Test Content</div>
      </Dialog>
    );

    expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('closes the dialog when the close button is clicked', () => {
    const mockClose = jest.fn();

    render(
      <Dialog title="Test Dialog" onClose={mockClose}>
        <div>Test Content</div>
      </Dialog>
    );

    userEvent.click(screen.getByText('X'));

    expect(mockClose).toHaveBeenCalled();
  });
});

