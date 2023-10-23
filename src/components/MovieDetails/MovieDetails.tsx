import './MovieDetails.css';
import MovieDetailsModel from '../../models/MovieDetailsModel';
import { Link } from "react-router-dom";

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
                        <img src={movieDetails?.ImageUrl} alt='Load error' />
                    </div>
                    <div className="div-MovieDetails-info">
                        <h2>{movieDetails?.MovieName}</h2>
                        <p>Year: {movieDetails?.ReleaseYear}</p>
                        <p>Rate: {movieDetails?.Rating}</p>
                        <p>Duration: {movieDetails?.Duration?.toLocaleTimeString("ru-RU", {hourCycle: 'h23'})}</p>
                        <p>{movieDetails?.Description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;