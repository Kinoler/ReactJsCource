import MovieDetailsModel from '../../models/MovieDetailsModel';
import { useLocation } from "react-router-dom";
import MovieTile from '../MovieTile/MovieTile';

interface MovieTileRouterProps {
  movieModel: MovieDetailsModel;
  onEditClickCallback: (movieName: MovieDetailsModel) => void;
  onDeleteClickCallback: (movieName: MovieDetailsModel) => void;
}

function MovieTileRouter({ movieModel, onEditClickCallback, onDeleteClickCallback }: MovieTileRouterProps) {
    let { search } = useLocation();

    return (
        <MovieTile movieModel={movieModel} search={search} onDeleteClickCallback={onDeleteClickCallback} onEditClickCallback={onEditClickCallback}/>
    );
};

export default MovieTileRouter;