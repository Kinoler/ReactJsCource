import MovieDetailsModel from '../../models/MovieBackendModel';
import { useLocation } from "react-router-dom";
import MovieTile from '../MovieTile/MovieTile';

interface MovieTileRouterProps {
  movieModel: MovieDetailsModel;
}

function MovieTileRouter({ movieModel }: MovieTileRouterProps) {
    let { search } = useLocation();

    return (
        <MovieTile movieModel={movieModel} search={search}/>
    );
};

export default MovieTileRouter;