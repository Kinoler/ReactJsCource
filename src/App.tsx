import React from 'react';
import './App.css';
import './styles.css';
import MovieListPage from './components/MovieListPage/MovieListPage';
import MovieDetailsRouter from './components/Routers/MovieDetailsRouter';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getMovieByIdAsync } from './api/api';
import MovieListPageHeader from './components/MovieListPage/MovieListPageHeader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
    children: [
      {
        path: "/",
        element: <MovieListPageHeader />,
      },
      {
        path: ":movieId",
        element: <MovieDetailsRouter />,
        loader: async ({ params }) => {
          const movieId = params.movieId ? parseInt(params.movieId, 10) : undefined;
          if (movieId) {
            const movieDetails = await getMovieByIdAsync(movieId);
            return { movieDetails };
          }
        },
      },
    ],
  },
]);

function App() {
    return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
    );
  }

export default App;
