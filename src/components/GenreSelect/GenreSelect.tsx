import './GenreSelect.css';
import { useState } from 'react';

interface GenreSelectProps {
  movieList: string[];
  selectedMovieName: string;
  onSelect: (genre: string) => void;
}

function GenreSelect({selectedMovieName, onSelect, movieList}: GenreSelectProps) {
    const [selectedGenre, setSelectedGenre] = useState<string>(selectedMovieName);

    const handleChange = (movieName: string) => {
      if (selectedGenre !== movieName) {
        setSelectedGenre(movieName);
        onSelect && onSelect(movieName);
      }
    };

  return (
    <div className="div-genreSelect">
      <p>GenreSelect: </p>
      <ul>
        {movieList?.map(movieName => {
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