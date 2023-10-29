import './MovieDetails.css';
import type MovieDetailsModel from '../../../app/models/MovieBackendModel';
import { Link } from "@remix-run/react";

interface MovieDetailsProps {
    movieDetails: MovieDetailsModel;
    search: string;
}

function MovieDetails({movieDetails, search}: MovieDetailsProps) {
    return (
        <div className="MovieListPage-Header-Details">
            <div className='CloseButton-Container'>
                <Link to={`/${search}`}>
                    <button className="CloseButton">X</button>
                </Link>
            </div>
            <div className='MovieListPage-Header-Details-Container'>
                <div className="div-MovieDetails-container">
                    <div className="div-MovieDetails-image">
                        <img src={movieDetails?.poster_path} alt='Load error' />
                    </div>
                    <div className="div-MovieDetails-info">
                        <h2>{movieDetails?.title}</h2>
                        <p>Year: {new Date(movieDetails?.release_date).getFullYear()}</p>
                        <p>Rate: {movieDetails?.vote_average}</p>
                        <p>Duration: {movieDetails?.runtime} min</p>
                        <p>{movieDetails?.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;