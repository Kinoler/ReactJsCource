import { render, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';

const mockMovieDetails = {
  ImageUrl: 'movie.jpg',
  MovieName: 'Sample Movie',
  ReleaseYear: 2022,
  Rating: 7.5,
  Duration: new Date(0, 0, 0, 2, 30), 
  Description: 'A great movie description.',
};

test('Renders MovieDetails component with correct data', () => {
  render(<MovieDetails movieDetails={mockMovieDetails} />);

  expect(screen.getByText('Sample Movie')).toBeInTheDocument();
  expect(screen.getByText('Year: 2022')).toBeInTheDocument();
  expect(screen.getByText('Rate: 7.5')).toBeInTheDocument();
  expect(screen.getByText('Duration: 02:30:00')).toBeInTheDocument(); 
  expect(screen.getByText('A great movie description.')).toBeInTheDocument();
});

test('Renders movie image with correct src and alt text', () => {
  render(<MovieDetails movieDetails={mockMovieDetails} />);

  const movieImage = screen.getByAltText('Load error');
  expect(movieImage).toBeInTheDocument();
  expect(movieImage).toHaveAttribute('src', 'movie.jpg');
});

test('Handles missing description gracefully', () => {
  const movieDetailsWithoutDescription = { ...mockMovieDetails, Description: undefined };

  render(<MovieDetails movieDetails={movieDetailsWithoutDescription} />);

  expect(screen.queryByText('A great movie description.')).not.toBeInTheDocument();
});