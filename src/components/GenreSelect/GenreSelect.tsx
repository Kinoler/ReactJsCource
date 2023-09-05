import './GenreSelect.css';
import { useState } from 'react';

interface GenreSelectProps {
  genreList: string[];
  selectedGenre: string;
  onSelect: (genre: string) => void;
}

function GenreSelect({selectedGenre, genreList, onSelect}: GenreSelectProps) {

    const handleChange = (movieName: string) => {
      if (selectedGenre !== movieName) {
        onSelect && onSelect(movieName);
      }
    };

  return (
    <div className="div-genreSelect">
      <ul>
        {genreList?.map(genreName => {
            return (
                <li value={genreName} 
                    key={genreName} 
                    className={selectedGenre === genreName ? 'li-selected' : ''} 
                    onClick={() => handleChange(genreName)}>
                    {genreName}
                </li>
            );
        })}
      </ul>
    </div>
  );
};

export default GenreSelect;