import type MovieDetailsModel from '../../../app/models/MovieBackendModel';
import MovieDetails from '../MovieDetails/MovieDetails';
import { useLocation, useLoaderData } from "@remix-run/react";

function MovieDetailsRouter() {
    const { search } = useLocation();
    const { movieDetails } = useLoaderData() as { movieDetails: MovieDetailsModel };

    return (
        <MovieDetails movieDetails={movieDetails} search={search} />
    );
}

export default MovieDetailsRouter;