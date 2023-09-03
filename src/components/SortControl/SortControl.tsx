import './SortControl.css';
import { useState } from 'react';

interface SortControlProps {
  onSelect: (sortByItem: string) => void;
}

function SortControl({ onSelect }: SortControlProps) {
    const [selectedGenre, setSelectedGenre] = useState<string>('');

    const handleChange = (sortByItem: string) => {
        setSelectedGenre(sortByItem);
        onSelect && onSelect(sortByItem);
    };

    const SortByList = ["Release Date", "Title"];

    return (
        <div className="div-SortControl">
        <p>Sort by: </p>
        <ul>
            {SortByList?.map(sortByItem => {
                return (
                    <li value={sortByItem} 
                        key={sortByItem} 
                        className={selectedGenre === sortByItem ? 'li-selected' : ''} 
                        onClick={() => handleChange(sortByItem)}>
                        {sortByItem}
                    </li>
                );
            })}
        </ul>
        </div>
    );
};

export default SortControl;