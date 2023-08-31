import './GenreSelect.css';

import React from 'react';
import { useState } from 'react';

interface GenreSelectProps {
  movieList: string[];
  selectedMovieName: string;
  onSelect: Function;
}

function GenreSelect(props: GenreSelectProps) {
    const [selectedGenre, setSelectedGenre] = useState<string>(props.selectedMovieName);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGenre(e.target.value);
        props.onSelect(selectedGenre);
    };

  return (
    <div className="div-genreSelect">
      <p>GenreSelect: </p>
      <select value={selectedGenre} onChange={handleChange}>
        {props.movieList.map(movieName => {
            return (
                <option value={movieName} key={movieName}>{movieName}</option>
            );
        })}
      </select>
    </div>
  );
};

export default GenreSelect;