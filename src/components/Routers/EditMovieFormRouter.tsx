import MovieDetailsModel from '../../models/MovieBackendModel';
import { useLocation, useLoaderData } from "react-router-dom";
import EditMovieForm from '../MovieForm/EditMovieForm';

function EditMovieFormRouter() {
    const { search } = useLocation();
    const { movieDetails } = useLoaderData() as { movieDetails: MovieDetailsModel };

    return (
        <EditMovieForm movieEditModel={movieDetails} />
    );
};

export default EditMovieFormRouter;