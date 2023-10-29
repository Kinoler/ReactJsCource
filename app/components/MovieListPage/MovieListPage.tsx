import './MovieListPage.css';
import GenreSelect from './../GenreSelect/GenreSelect';
import MovieTileRouter from './../Routers/MovieTileRouter';
import SortControl from './../SortControl/SortControl';

import type MovieDetailsModel from '../../../app/models/MovieBackendModel';
import { useSearchParams , Outlet, useLoaderData } from "@remix-run/react";


const genreList = ["All", "DOCUMENTARY", "COMEDY", "FANTASY", "CRIME"];
const sortByList = ["Release Date", "Title"];

function MovieListPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedGenre = genreList.find(el => el.toLowerCase() === searchParams.get('genre')?.toLowerCase()) || genreList[0];
    const selectedSortBy = sortByList.find(el => el.toLowerCase() === searchParams.get('sortBy')?.toLowerCase()) || sortByList[0];
    
    const setSelectedGenre = (genre: string) => {
        setSearchParams(prevSearchParams => {
            prevSearchParams.set('genre', genre);
            return prevSearchParams;
          });
    };
    
    const setSelectedSortBy = (sortBy: string) => {
        setSearchParams(prevSearchParams => {
            prevSearchParams.set('sortBy', sortBy);
            return prevSearchParams ;
          });
    };

    const { movieList } = useLoaderData() as { movieList: MovieDetailsModel[] };

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
                            <div key={movie.title} className="MovieListPage-Content-ListItem">
                                <MovieTileRouter movieModel={movie} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MovieListPage;