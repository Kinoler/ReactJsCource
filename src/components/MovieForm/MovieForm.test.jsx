/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import MovieForm from './MovieForm';

describe('MovieForm', () => {
  let mockSubmit;

  beforeEach(() => {
    mockSubmit = jest.fn();
  });

  test('renders correctly', () => {
    render(<MovieForm onSubmit={mockSubmit} isEdit={false} movieEditModel={null} />);

    expect(screen.getByLabelText(/Title:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Movie URL:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Genre:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Release Date:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Rating:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Runtime:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Overview:/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/)).toBeInTheDocument();
  });

  test('fills inputs and submits the form', () => {
    render(<MovieForm onSubmit={mockSubmit} isEdit={false} movieEditModel={null} />);
    act(() => {
        userEvent.type(screen.getByLabelText(/Title:/i), 'Test Title');
        userEvent.type(screen.getByLabelText(/Movie URL:/i), 'http://testurl.com');
        userEvent.type(screen.getByLabelText(/Genre:/i), 'Action');
        userEvent.type(screen.getByLabelText(/Release Date:/i), '2023-09-05');
        userEvent.type(screen.getByLabelText(/Rating:/i), '5');
        userEvent.type(screen.getByLabelText(/Runtime:/i), '120 mins');
        userEvent.type(screen.getByLabelText(/Overview:/i), 'Test overview for the movie.');
    
        userEvent.click(screen.getByText(/Submit/));
    });


    expect(mockSubmit).toHaveBeenCalledWith({
      Title: 'Test Title',
      MovieUrl: 'http://testurl.com',
      Genre: 'Action',
      Overview: 'Test overview for the movie.',
      ReleaseDate: '2023-09-05',
      Rating: '05',
      Runtime: '120 mins',
    });
  });

  test('sets initial values when in edit mode', () => {
    const movieData = {
      Title: 'Old Title',
      MovieUrl: 'http://oldurl.com',
      Genre: 'Comedy',
      Overview: 'Old overview for the movie.',
      ReleaseDate: '2022-01-01',
      Rating: 4,
      Runtime: '110 mins',
    };

    render(<MovieForm onSubmit={mockSubmit} isEdit={true} movieEditModel={movieData} />);

    expect(screen.getByLabelText(/Title:/i)).toHaveValue('Old Title');
    expect(screen.getByLabelText(/Movie URL:/i)).toHaveValue('http://oldurl.com');
    expect(screen.getByLabelText(/Genre:/i)).toHaveValue('Comedy');
    expect(screen.getByLabelText(/Release Date:/i)).toHaveValue('2022-01-01');
    expect(screen.getByLabelText(/Rating:/i)).toHaveValue(4);
    expect(screen.getByLabelText(/Runtime:/i)).toHaveValue('110 mins');
    expect(screen.getByLabelText(/Overview:/i)).toHaveValue('Old overview for the movie.');
  });
});
