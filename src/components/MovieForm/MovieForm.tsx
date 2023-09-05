import React, { useState } from 'react';
import './MovieForm.css';
import MovieEditModel from '../../models/MovieEditModel';

interface MovieFormProps {
  onSubmit: (movieData: MovieEditModel) => void;
  movieEditModel?: MovieEditModel | null
}

const initialMovieData: MovieEditModel = {
    Title: '',
    MovieUrl: '',
    Genre: '',
    Overview: '',
    ReleaseDate: '',
    Rating: 0,
    Runtime: '',
  };

function MovieForm({ onSubmit, movieEditModel }: MovieFormProps) {
    const [movieData, setMovieData] = useState<MovieEditModel>(movieEditModel ?? initialMovieData);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setMovieData({
        ...movieData,
        [name]: value,
      });
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      onSubmit(movieData);

      handleReset(event)
    };
  
    const handleReset = (event: React.FormEvent) => {
      event.preventDefault();

      setMovieData(initialMovieData);
    };
  
    return (
      <form className='MovieForm' onSubmit={handleSubmit} onReset={handleReset}>
        <div className='MovieForm-general' >
            <div className='MovieForm-first-column' >
                <div className='MovieForm-prop' >
                    <label htmlFor="Title">Title:</label>
                    <input
                        type="text"
                        id="Title"
                        name="Title"
                        value={movieData.Title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='MovieForm-prop' >
                    <label htmlFor="MovieUrl">Movie URL:</label>
                    <input
                        type="text"
                        id="MovieUrl"
                        name="MovieUrl"
                        value={movieData.MovieUrl}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='MovieForm-prop' >
                    <label htmlFor="Genre">Genre:</label>
                    <input
                        type="text"
                        id="Genre"
                        name="Genre"
                        value={movieData.Genre}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className='MovieForm-second-column' >

                <div className='MovieForm-prop' >
                    <label htmlFor="ReleaseDate">Release Date:</label>
                    <input
                        type="date"
                        id="ReleaseDate"
                        name="ReleaseDate"
                        value={movieData.ReleaseDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='MovieForm-prop' >
                    <label htmlFor="Rating">Rating:</label>
                    <input
                        type="number"
                        id="Rating"
                        name="Rating"

                        value={movieData.Rating}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='MovieForm-prop' >
                    <label htmlFor="Runtime">Runtime:</label>
                    <input
                        type="text"
                        id="Runtime"
                        name="Runtime"
                        value={movieData.Runtime}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
        </div>

        <div className='MovieForm-Overview MovieForm-prop' >
          <label htmlFor="Overview">Overview:</label>
          <textarea
            id="Overview"
            name="Overview"
            value={movieData.Overview}
            onChange={handleChange}
            required
          />
        </div>

        <div className='MovieForm-Submit' >
            {!movieEditModel && <button type="reset" className='MovieForm-Reset'>Reset</button>}
            <button type="submit">{movieEditModel ? "Edit" : "Add"}</button>
        </div>

      </form>
    );
  };
  
  export default MovieForm;