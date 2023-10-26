import qs from 'qs';
import MovieBackendModel from '../models/MovieBackendModel';
import axios, { CancelToken, AxiosResponse } from 'axios';
import { any } from 'cypress/types/bluebird';

const baseUrl = "http://localhost:4000";
const moviesPath = "/movies";

async function getMovieDataAsync(selectedSortBy: string, searchQuery: string, selectedGenre: string, genreList: string[], cancelToken: CancelToken) {
    const response = await axios.get(moviesPath, { 
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
        const movies = moviesJson.map((movieJson: MovieBackendModel) => movieJson);
        return movies;
    }
}

async function getMovieByIdAsync(id: number): Promise<MovieBackendModel | undefined> {
    const response = await axios.get(`${moviesPath}/${id}`, { 
        baseURL: baseUrl,
        params: {
            id: id
        },
        paramsSerializer: params => {
            return qs.stringify(params)
        }
    });

    if(response.status === 200){
        const movieJson = response.data;
        return movieJson;
    }
}

async function updatetMovieByIdAsync(movieBackendModel: MovieBackendModel): Promise<MovieBackendModel | undefined> {
    movieBackendModel.genres = movieBackendModel.genres.toString().split(",");
    const response = await axios.put(`${moviesPath}`, movieBackendModel, { 
        baseURL: baseUrl,
    });

    if(response.status === 200){
        const movieJson = response.data;
        return movieJson;
    }
}

async function addMovie(movieBackendModel: MovieBackendModel): Promise<MovieBackendModel | undefined> {
    movieBackendModel.genres = movieBackendModel.genres.toString().split(",");
    delete movieBackendModel.id;
    try {
        var response = await axios.post(`${moviesPath}`, movieBackendModel, { 
            baseURL: baseUrl,
        });

        if(response.status === 201){
            const movieJson = response.data;
            return movieJson;
        }
    } catch (error) {
        var t = error;
        return;
    }
}

export {getMovieDataAsync, getMovieByIdAsync, updatetMovieByIdAsync, addMovie};