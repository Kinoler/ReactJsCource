import './MovieListPage.css';
import axios from 'axios';

import SearchForm from './../SearchForm/SearchForm';
import GenreSelect from './../GenreSelect/GenreSelect';
import MovieTile from './../MovieTile/MovieTile';
import MovieDetails from './../MovieDetails/MovieDetails';
import SortControl from './../SortControl/SortControl';

import MovieDetailsModel from './../../models/MovieDetailsModel';
import { useState, useEffect, useCallback } from 'react';

interface MovieBackendModel {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    genres: string[];
    runtime: number;
}

const GenreList = ["All", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
const SortByList = ["Release Date", "Title"];

let source = axios.CancelToken.source();

function MovieListPage() {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const [selectedMovie, setSelectedMovie] = useState<MovieDetailsModel>();
    const [selectedGenre, setSelectedGenre] = useState<string>(GenreList[0]);
    const [selectedSortBy, setSelectedSortBy] = useState<string>(SortByList[0]);

    const [movieList, setMovieList] = useState<MovieDetailsModel[]>();

    const fetchMovies = useCallback(async () => {
        setMovieList(undefined);
        const baseUrl = "http://localhost:4000";
        const path = "/movies";
        const url = `${baseUrl}${path}?sortBy=${selectedSortBy.replace(" ", "_").toLowerCase()}${searchQuery ? `&search=${searchQuery}` : ""}${selectedGenre !== GenreList[0] ? `&filter=${selectedGenre}` : ""}&searchBy=title&offset=0&limit=50&sortOrder=asc`;
        const response = await axios.get(url, { cancelToken: source.token });
        if(response.status === 200){
            const moviesJson = response.data.data;
            const movies = moviesJson.map((movieJson: MovieBackendModel) => {
                return new MovieDetailsModel(
                    movieJson.poster_path, 
                    movieJson.title,
                    new Date(movieJson.release_date).getFullYear(),
                    movieJson.vote_average,
                    new Date(new Date().setMinutes(movieJson.runtime)),
                    movieJson.overview,
                    movieJson.genres
                )
            });
    
            setMovieList(movies);
        }

    }, [selectedGenre, selectedSortBy, searchQuery]);

    useEffect(() => {
        source.cancel('Operation canceled by user.');
        source = axios.CancelToken.source();
        fetchMovies();
    }, [fetchMovies]);

    return (
        <div className="MovieListPage-Wrapper">
            <div className="MovieListPage-Container">
                <div className="MovieListPage-Header">
                    {selectedMovie ? 
                        <div className="MovieListPage-Header-Details">
                            <div className='CloseButton-Container'>
                                <button className="CloseButton" onClick={() => setSelectedMovie(undefined)}>X</button>
                            </div>
                            <div className='MovieListPage-Header-Details-Container'>
                                <MovieDetails movieDetails={selectedMovie} />
                            </div>
                        </div> 
                        :
                        <div className="MovieListPage-Header-SearchForm">
                            <div className='AddMovieButton-Container'>
                                <button className="AddMovieButton">Add movie</button>
                            </div>
                            <div className='SearchForm-Container'>
                                <p className="SearchForm-Lable">FIND YOUR MOVIE</p>
                                <SearchForm initialSearch={searchQuery} onSearch={(searchValue) => setSearchQuery(searchValue)}/>
                            </div>
                        </div> 
                    }
                </div>
                
                <div className="MovieListPage-Content">
                    <div className="MovieListPage-Content-Config">
                        <GenreSelect genreList={GenreList} selectedGenre={selectedGenre} onSelect={(genre) => setSelectedGenre(genre)} />
                        <SortControl sortByList={SortByList} selectedSortBy={selectedSortBy} onSelect={(sortBy) => setSelectedSortBy(sortBy)} />
                    </div>
                    <div className="MovieListPage-Content-ResultCount">
                        <p>Movies found: 0</p>
                    </div>
                    <div className="MovieListPage-Content-List">
                        {movieList && movieList.map(movie => (
                            <div className="MovieListPage-Content-ListItem">
                                <MovieTile movieModel={movie} 
                                    onClickCallback={(movieDetails) => setSelectedMovie(movieDetails)}
                                    onEditClickCallback={(val) => console.log(val)}
                                    onDeleteClickCallback={(val) => console.log(val)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MovieListPage;