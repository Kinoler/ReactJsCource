import { useSearchParams, Link, Outlet } from 'react-router-dom';
import SearchForm from './../SearchForm/SearchForm';

function MovieListPageHeader() {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('query') || '';
    const setSearchQuery = (query: string) => {
        searchParams.set('query', query);
        setSearchParams(searchParams);
    };

    return (
        <div className="MovieListPage-Header-SearchForm">
            <div className='AddMovieButton-Container'>
                <Link to={'/new'}>
                    <button className="AddMovieButton">Add movie</button>
                </Link>
            </div>
            <Outlet />
            <div className='SearchForm-Container'>
                <p className="SearchForm-Lable">FIND YOUR MOVIE</p>
                <SearchForm initialSearch={searchQuery} onSearch={(searchValue) => setSearchQuery(searchValue)}/>
            </div>
        </div> 
    );
}

export default MovieListPageHeader;