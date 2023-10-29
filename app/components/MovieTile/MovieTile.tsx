import './MovieTile.css';
import MovieDetailsModel from '../../../app/models/MovieBackendModel';
import DotsIcon from './../../resources/DotsIcon.png';
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

interface MovieTileProps {
  movieModel: MovieDetailsModel;
  search: string;
}

function MovieTile({ movieModel, search }: MovieTileProps) {
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

    return (
        movieModel ? (
            <div className="div-MovieTile-General">
                <Link to={`/${movieModel.id}${search}`}>
                    <div className="div-MovieTile-Select">
                        <div className="div-MovieTile-imageContainer">
                            <img src={movieModel?.poster_path} alt='Movie poster'/>
                        </div>
                        <div className="div-NameYear">
                            <p className='p-NameYear-Name'>{movieModel?.title}</p>
                            <p className="p-NameYear-Year">{new Date(movieModel?.release_date).getFullYear()}</p>
                        </div>
                        <p className="p-genres">{movieModel?.genres?.join(', ')}</p>
                    </div>
                </Link>
                <div ref={containerRef}>
                    <img src={DotsIcon} alt='Dots' className='div-MovieTile-dots' onClick={toggleContextMenu} />
                    {isContextMenuOpen && (
                        <div className="div-MovieTile-context-menu">
                            <Link to={`/${movieModel.id}/edit${search}`}>
                                <button>Edit</button>
                            </Link>
                            <Link to={`/${movieModel.id}/delete${search}`}>
                                <button>Delete</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        ) : (
            <div />
        )
    );
};

export default MovieTile;