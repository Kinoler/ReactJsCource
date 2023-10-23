import './MovieTile.css';
import MovieDetailsModel from '../../models/MovieDetailsModel';
import DotsIcon from './../../resources/DotsIcon.png';
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

interface MovieTileProps {
  movieModel: MovieDetailsModel;
  search: string;
  onEditClickCallback: (movieName: MovieDetailsModel) => void;
  onDeleteClickCallback: (movieName: MovieDetailsModel) => void;
}

function MovieTile({ movieModel, search, onEditClickCallback, onDeleteClickCallback }: MovieTileProps) {
    const [isContextMenuOpen, setContextMenuOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    
    const onClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setContextMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', onClickOutside);

        return () => {
            document.removeEventListener('click', onClickOutside);
        };
    }, []);

    const toggleContextMenu = () => {
        setContextMenuOpen((prevState) => !prevState);
    };

    const handleEditClick = () => {
        onEditClickCallback && onEditClickCallback(movieModel);
    };

    const handleDeleteClick = () => {
        onDeleteClickCallback && onDeleteClickCallback(movieModel);
    };

    return (
        movieModel ? (
            <div className="div-MovieTile-General">
                <Link to={`/${movieModel.Id}${search}`}>
                    <div className="div-MovieTile-Select">
                        <div className="div-MovieTile-imageContainer">
                            <img src={movieModel?.ImageUrl} alt='Movie poster'/>
                        </div>
                        <div className="div-NameYear">
                            <p className='p-NameYear-Name'>{movieModel?.MovieName}</p>
                            <p className="p-NameYear-Year">{movieModel?.ReleaseYear}</p>
                        </div>
                        <p className="p-genres">{movieModel?.Genres?.join(', ')}</p>
                    </div>
                </Link>
                <img src={DotsIcon} alt='Dots' className='div-MovieTile-dots' onClick={toggleContextMenu} />
                {isContextMenuOpen && (
                    <div className="div-MovieTile-context-menu" ref={containerRef}>
                        <button onClick={handleEditClick}>Edit</button>
                        <button onClick={handleDeleteClick}>Delete</button>
                    </div>
                )}

            </div>
        ) : (
            <div />
        )
    );
};

export default MovieTile;