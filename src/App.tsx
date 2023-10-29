import React from 'react';
import './App.css';
import './styles.css';
import MovieListPage from './components/MovieListPage/MovieListPage';
import MovieDetailsRouter from './components/Routers/MovieDetailsRouter';
import { createBrowserRouter, LoaderFunctionArgs, RouterProvider } from "react-router-dom";
import { getMovieByIdAsync } from '../app/api/api';
import MovieListPageHeader from './components/MovieListPage/MovieListPageHeader';
import AddMovieForm from './components/MovieForm/AddMovieForm';
import EditMovieFormRouter from './components/Routers/EditMovieFormRouter';

const loaderById = async ({ params } : LoaderFunctionArgs<any>) => {
  const movieId = params.movieId ? parseInt(params.movieId, 10) : undefined;
  if (movieId) {
    const movieDetails = await getMovieByIdAsync(movieId);
    return { movieDetails };
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
    children: [
      {
        path: "/",
        element: <MovieListPageHeader />,
        children: [
          {
            path:"/new",
            element: <AddMovieForm />
          }
        ]
      },
      {
        path: ":movieId",
        element: <MovieDetailsRouter />,
        loader: loaderById,
      },
      {
        path: ":movieId/edit",
        element: <EditMovieFormRouter />,
        loader: loaderById,
      }
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
