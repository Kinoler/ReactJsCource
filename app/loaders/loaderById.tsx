import type { LoaderFunction } from "@remix-run/node";
import { getMovieByIdAsync } from "~/api/api";

export let loaderById: LoaderFunction = async ({ params }) => {
    const movieId = params.movieId && +params.movieId;
    if (movieId) {
      const movieDetails = await getMovieByIdAsync(movieId);
      return { movieDetails };
    }
  };