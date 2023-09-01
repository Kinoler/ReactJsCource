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

    const handleChange = (movieName: string) => {
        setSelectedGenre(movieName);
        props.onSelect(selectedGenre);
    };

  return (
    <div className="div-genreSelect">
      <p>GenreSelect: </p>
      <ul>
        {props.movieList.map(movieName => {
            return (
                <li value={movieName} 
                    key={movieName} 
                    className={selectedGenre === movieName ? 'li-selected' : ''} 
                    onClick={() => handleChange(movieName)}>
                    {movieName}
                </li>
            );
        })}
      </ul>
    </div>
  );
};

export default GenreSelect;