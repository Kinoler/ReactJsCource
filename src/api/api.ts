import qs from 'qs';
import MovieDetailsModel from '../models/MovieDetailsModel';
import axios, { CancelToken } from 'axios';

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

async function getMovieDataAsync(selectedSortBy: string, searchQuery: string, selectedGenre: string, genreList: string[], cancelToken: CancelToken) {
    const baseUrl = "http://localhost:4000";
    const path = "/movies";
    const response = await axios.get(path, { 
        baseURL: baseUrl,
        params: {
            sortBy: selectedSortBy.replace(" ", "_").toLowerCase(),
            search: searchQuery,
            filter: selectedGenre !== genreList[0] ? selectedGenre : "",
            searchBy: "title",
            offset: 0,
            limit: 50, 
            sortOrder: "asc"
        },
        paramsSerializer: params => {
            return qs.stringify(params)
        },
        cancelToken: cancelToken
    });

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

        return movies;
    }
}

export {getMovieDataAsync};