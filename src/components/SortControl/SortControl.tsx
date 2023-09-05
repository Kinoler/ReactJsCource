import './SortControl.css';
import { useState } from 'react';

interface SortControlProps {
  onSelect: (sortByItem: string) => void;
  selectedSortBy: string,  
  sortByList: string[]
}

function SortControl({ sortByList, selectedSortBy, onSelect}: SortControlProps) {
    const handleChange = (sortByItem: string) => {
        if (selectedSortBy !== sortByItem) {
            onSelect && onSelect(sortByItem);
        }
    };

    return (
        <div className="div-SortControl">
        <p>Sort by: </p>
        <ul>
            {sortByList?.map(sortByItem => {
                return (
                    <li value={sortByItem} 
                        key={sortByItem} 
                        className={selectedSortBy === sortByItem ? 'li-selected' : ''} 
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