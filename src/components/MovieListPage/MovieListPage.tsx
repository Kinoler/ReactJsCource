import './MovieListPage.css';
import axios from 'axios';

import {getMovieDataAsync} from './../../api/api';
import GenreSelect from './../GenreSelect/GenreSelect';
import MovieTileRouter from './../Routers/MovieTileRouter';
import SortControl from './../SortControl/SortControl';

import MovieDetailsModel from './../../models/MovieDetailsModel';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Outlet } from "react-router-dom";

const genreList = ["All", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
const sortByList = ["Release Date", "Title"];

let source = axios.CancelToken.source();

function MovieListPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('query') || '';

    const selectedGenre = genreList.find(el => el.toLowerCase() === searchParams.get('genre')?.toLowerCase()) || genreList[0];
    const setSelectedGenre = (genre: string) => {
        searchParams.set('genre', genre);
        setSearchParams(searchParams);
    };
    
    const selectedSortBy = sortByList.find(el => el.toLowerCase() === searchParams.get('sortBy')?.toLowerCase()) || sortByList[0];
    const setSelectedSortBy = (sortBy: string) => {
        searchParams.set('sortBy', sortBy);
        setSearchParams(searchParams);
    };

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
                    <Outlet />
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
                                <MovieTileRouter movieModel={movie} 
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