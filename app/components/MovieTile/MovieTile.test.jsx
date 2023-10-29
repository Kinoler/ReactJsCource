import { render, screen, fireEvent } from '@testing-library/react';
import MovieTile from './MovieTile';
import { BrowserRouter } from 'react-router-dom'; 

const mockMovieModel = {
  MovieName: 'Movie 1',
  ImageUrl: 'movie1.jpg',
  ReleaseYear: 2022,
  Genres: ['Action', 'Adventure'],
};

test('Component renders with movie details', () => {
  render(
    <BrowserRouter>
    <MovieTile
      movieModel={mockMovieModel}
      onEditClickCallback={() => {}}
      onDeleteClickCallback={() => {}}
    />
    </BrowserRouter>
  );

  expect(screen.getByText(mockMovieModel.MovieName)).toBeInTheDocument();
  expect(screen.getByText(mockMovieModel.ReleaseYear.toString())).toBeInTheDocument();
  expect(screen.getByText(mockMovieModel.Genres.join(', '))).toBeInTheDocument();
  expect(screen.getByAltText('Movie poster')).toBeInTheDocument();
});

test('Clicking on the dots icon opens the context menu', () => {
  render(
    <BrowserRouter>
    <MovieTile
      movieModel={mockMovieModel}
      onEditClickCallback={() => {}}
      onDeleteClickCallback={() => {}}
    />
    </BrowserRouter>
  );

  expect(screen.queryByText('Edit')).not.toBeInTheDocument();

  fireEvent.click(screen.getByAltText('Dots'));

  expect(screen.getByText('Edit')).toBeInTheDocument();
  expect(screen.getByText('Delete')).toBeInTheDocument();
});

test('Clicking on Edit in the context menu triggers the onEditClickCallback', () => {
  const onEditClickCallback = jest.fn();


  render(
    <BrowserRouter>
    <MovieTile
      movieModel={mockMovieModel}
      onEditClickCallback={onEditClickCallback}
      onDeleteClickCallback={() => {}}
    />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByAltText('Dots'));
  fireEvent.click(screen.getByText('Edit'));

  expect(onEditClickCallback).toHaveBeenCalledWith(mockMovieModel);
});