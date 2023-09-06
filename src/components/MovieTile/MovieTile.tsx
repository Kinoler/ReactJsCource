import './MovieTile.css';
import MovieDetailsModel from '../../models/MovieDetailsModel';
import DotsIcon from './../../resources/DotsIcon.png';
import { useState, useEffect, useRef } from 'react';

interface MovieTileProps {
  movieModel: MovieDetailsModel;
  onClickCallback: (movieName: string) => void;
  onEditClickCallback: (movieName: string) => void;
  onDeleteClickCallback: (movieName: string) => void;
}

function MovieTile({ movieModel, onClickCallback, onEditClickCallback, onDeleteClickCallback }: MovieTileProps) {
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
        
    const onClick = () => {
        onClickCallback && onClickCallback(movieModel?.MovieName);
    };

    const handleEditClick = () => {
        onEditClickCallback && onEditClickCallback(movieModel?.MovieName);
    };

    const handleDeleteClick = () => {
        onDeleteClickCallback && onDeleteClickCallback(movieModel?.MovieName);
    };
    
    return (
        <div className="div-MovieTile-General">
            <div onClick={onClick} className="div-MovieTile-Select">
                <div className="div-MovieTile-imageContainer">
                    <img src={movieModel?.ImageUrl} alt='Movie poster'/>
                </div>
                <div className="div-NameYear">
                    <p>{movieModel?.MovieName}</p>
                    <p className="p-Year">{movieModel?.ReleaseYear}</p>
                </div>
                <p>{movieModel?.Genres?.join(', ')}</p>
            </div>
            <img src={DotsIcon} alt='Dots' className='div-MovieTile-dots' onClick={toggleContextMenu} />
            {isContextMenuOpen && (
                <div className="div-MovieTile-context-menu" ref={containerRef}>
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={handleDeleteClick}>Delete</button>
                </div>
            )}

        </div>
    );
};

export default MovieTile;