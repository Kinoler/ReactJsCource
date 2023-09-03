import './MovieDetails.css';
import MovieDetailsModel from '../../models/MovieDetailsModel';

interface MovieDetailsProps {
    movieDetails: MovieDetailsModel;
}

function MovieDetails({ movieDetails }: MovieDetailsProps) {
    return (
        <div className="div-MovieDetails-container">
            <div className="div-MovieDetails-image">
                <img src={movieDetails?.ImageUrl} alt='Load error' />
            </div>
            <div className="div-MovieDetails-info">
                <h2>{movieDetails?.MovieName}</h2>
                <p>Year: {movieDetails?.ReleaseYear}</p>
                <p>Rate: {movieDetails?.Rating}</p>
                <p>Duration: {movieDetails?.Duration?.toLocaleTimeString()}</p>
                <p>{movieDetails?.Description}</p>
            </div>
        </div>
    );
};

export default MovieDetails;