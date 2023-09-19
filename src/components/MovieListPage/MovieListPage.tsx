import './MovieListPage.css';
import axios from 'axios';

import SearchForm from './../SearchForm/SearchForm';
import {getMovieDataAsync} from './../../api/api';
import GenreSelect from './../GenreSelect/GenreSelect';
import MovieTile from './../MovieTile/MovieTile';
import MovieDetails from './../MovieDetails/MovieDetails';
import SortControl from './../SortControl/SortControl';

import MovieDetailsModel from './../../models/MovieDetailsModel';
import { useState, useEffect, useCallback } from 'react';

const genreList = ["All", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
const sortByList = ["Release Date", "Title"];

let source = axios.CancelToken.source();

function MovieListPage() {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const [selectedMovie, setSelectedMovie] = useState<MovieDetailsModel>();
    const [selectedGenre, setSelectedGenre] = useState<string>(genreList[0]);
    const [selectedSortBy, setSelectedSortBy] = useState<string>(sortByList[0]);

    const [movieList, setMovieList] = useState<MovieDetailsModel[]>();

    const fetchMovies = useCallback(async () => {
        try {
            const movies = await getMovieDataAsync(selectedSortBy, searchQuery, selectedGenre, genreList, source.token)
            if(movies) {
                setMovieList(movies);
            }
        } catch {
            // ignore
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
                        <GenreSelect genreList={genreList} selectedGenre={selectedGenre} onSelect={(genre) => setSelectedGenre(genre)} />
                        <SortControl sortByList={sortByList} selectedSortBy={selectedSortBy} onSelect={(sortBy) => setSelectedSortBy(sortBy)} />
                    </div>
                    <div className="MovieListPage-Content-ResultCount">
                        <p>Movies found: {movieList?.length ?? 0}</p>
                    </div>
                    <div className="MovieListPage-Content-List">
                        {movieList && movieList.map(movie => movie && (
                            <div key={movie.MovieName} className="MovieListPage-Content-ListItem">
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