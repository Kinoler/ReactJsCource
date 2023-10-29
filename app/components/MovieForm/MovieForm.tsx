import './MovieForm.css';
import type MovieBackendModel from '../../../app/models/MovieBackendModel';
import { useForm, Controller } from 'react-hook-form';

interface MovieFormProps {
  onSubmit: (movieData: MovieBackendModel) => void;
  movieEditModel?: MovieBackendModel | null
}

const initialMovieData: MovieBackendModel = {
  id: 0,
  poster_path: "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg", 
  title: "La La Land",
  release_date: "2016-12-29",
  vote_average: 7.9,
  runtime: 128,
  overview: "Mia, an aspiring actress, serves lattes to movie stars in between auditions",
  genres: [
    "Comedy",
    "Drama",
    "Romance"
  ],
  budget: 30000000,
  revenue: 445435700,
  tagline: "Here's to the fools who dream.",
  vote_count: 6782
};

function MovieForm({ onSubmit, movieEditModel }: MovieFormProps) {
    const { handleSubmit, reset, control } = useForm({
      defaultValues: movieEditModel || initialMovieData
    });
  
    const onFormSubmit = (data: MovieBackendModel) => {
      onSubmit(data);
      reset();
    };
  
    return (
      <form className='MovieForm' onSubmit={handleSubmit(onFormSubmit)}>
      <div className='MovieForm-general'>
      <div className='MovieForm-first-column'>
        <div className='MovieForm-prop'>
          <label htmlFor="Title">Title:</label>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <input type="text" id="title" {...field} required />
            )}
          />
        </div>
        <div className='MovieForm-prop'>
          <label htmlFor="MovieUrl">Movie URL:</label>
          <Controller
            name="poster_path"
            control={control}
            render={({ field }) => (
              <input type="text" id="poster_path" {...field} required />
            )}
          />
        </div>
        <div className='MovieForm-prop'>
          <label htmlFor="Genre">Genre:</label>
          <Controller
            name="genres"
            control={control}
            render={({ field }) => (
              <input type="text" id="genres" {...field} required />
            )}
          />
        </div>
      </div>

      <div className='MovieForm-second-column'>
        <div className='MovieForm-prop'>
          <label htmlFor="ReleaseDate">Release Date:</label>
          <Controller
            name="release_date"
            control={control}
            render={({ field }) => (
              <input type="date" id="release_date" {...field} required />
            )}
          />
        </div>
        <div className='MovieForm-prop'>
          <label htmlFor="Rating">Rating:</label>
          <Controller
            name="vote_average"
            control={control}
            render={({ field }) => (
              <input type="number" id="vote_average" {...field} required />
            )}
          />
        </div>
        <div className='MovieForm-prop'>
          <label htmlFor="Runtime">Runtime:</label>
          <Controller
            name="runtime"
            control={control}
            render={({ field }) => (
              <input type="text" id="runtime" {...field} required />
            )}
          />
        </div>
      </div>

      </div>

      <div className='MovieForm-Overview MovieForm-prop'>
        <label htmlFor="Overview">Overview:</label>
        <Controller
          name="overview"
          control={control}
          render={({ field }) => (
            <textarea id="overview" {...field} required />
          )}
        />
      </div>

      <div className='MovieForm-Submit'>
        {!movieEditModel && <button type="reset" className='MovieForm-Reset' onClick={() => reset()}>Reset</button>}
        <button type="submit">{movieEditModel ? "Edit" : "Add"}</button>
      </div>
    </form>
  );
}
  
  export default MovieForm;