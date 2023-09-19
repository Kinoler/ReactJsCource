import { render, screen, fireEvent } from '@testing-library/react';
import MovieTile from './MovieTile';

const mockMovieModel = {
  MovieName: 'Movie 1',
  ImageUrl: 'movie1.jpg',
  ReleaseYear: 2022,
  Genres: ['Action', 'Adventure'],
};

test('Component renders with movie details', () => {
  render(
    <MovieTile
      movieModel={mockMovieModel}
      onClickCallback={() => {}}
      onEditClickCallback={() => {}}
      onDeleteClickCallback={() => {}}
    />
  );

  expect(screen.getByText(mockMovieModel.MovieName)).toBeInTheDocument();
  expect(screen.getByText(mockMovieModel.ReleaseYear.toString())).toBeInTheDocument();
  expect(screen.getByText(mockMovieModel.Genres.join(', '))).toBeInTheDocument();
  expect(screen.getByAltText('Movie poster')).toBeInTheDocument();
});

test('Clicking on the movie triggers the onClickCallback', () => {
  const onClickCallback = jest.fn();

  render(
    <MovieTile
      movieModel={mockMovieModel}
      onClickCallback={onClickCallback}
      onEditClickCallback={() => {}}
      onDeleteClickCallback={() => {}}
    />
  );

  fireEvent.click(screen.getByText(mockMovieModel.MovieName));

  expect(onClickCallback).toHaveBeenCalledWith(mockMovieModel);
});

test('Clicking on the dots icon opens the context menu', () => {
  render(
    <MovieTile
      movieModel={mockMovieModel}
      onClickCallback={() => {}}
      onEditClickCallback={() => {}}
      onDeleteClickCallback={() => {}}
    />
  );

  expect(screen.queryByText('Edit')).not.toBeInTheDocument();

  fireEvent.click(screen.getByAltText('Dots'));

  expect(screen.getByText('Edit')).toBeInTheDocument();
  expect(screen.getByText('Delete')).toBeInTheDocument();
});

test('Clicking on Edit in the context menu triggers the onEditClickCallback', () => {
  const onEditClickCallback = jest.fn();


  render(
    <MovieTile
      movieModel={mockMovieModel}
      onClickCallback={() => {}}
      onEditClickCallback={onEditClickCallback}
      onDeleteClickCallback={() => {}}
    />
  );

  fireEvent.click(screen.getByAltText('Dots'));
  fireEvent.click(screen.getByText('Edit'));

  expect(onEditClickCallback).toHaveBeenCalledWith(mockMovieModel);
});