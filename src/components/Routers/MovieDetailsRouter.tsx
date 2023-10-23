import MovieDetailsModel from '../../models/MovieDetailsModel';
import MovieDetails from '../MovieDetails/MovieDetails';
import { useLocation, useLoaderData } from "react-router-dom";

function MovieDetailsRouter() {
    const { search } = useLocation();
    const { movieDetails } = useLoaderData() as { movieDetails: MovieDetailsModel };

    return (
        <MovieDetails movieDetails={movieDetails} search={search} />
    );
};

export default MovieDetailsRouter;