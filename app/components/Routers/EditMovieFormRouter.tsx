import type MovieDetailsModel from '../../../app/models/MovieBackendModel';
import { useLoaderData } from "@remix-run/react";
import EditMovieForm from '../MovieForm/EditMovieForm';

function EditMovieFormRouter() {
    const { movieDetails } = useLoaderData() as { movieDetails: MovieDetailsModel };

    return (
        <EditMovieForm movieEditModel={movieDetails} />
    );
}

export default EditMovieFormRouter;