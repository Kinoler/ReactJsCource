import Dropdown from '../Dropdown/Dropdown';
import './SortControl.css';
import { useState } from 'react';

interface SortControlProps {
  onSelect: (sortByItem: string) => void;
}

function SortControl({ onSelect }: SortControlProps) {
    const [selectedSortBy, setSelectedSortBy] = useState<string>('');

    const handleChange = (sortByItem: string) => {
        if (selectedSortBy !== sortByItem) {
            setSelectedSortBy(sortByItem);
            onSelect && onSelect(sortByItem);
        }
    };

    const SortByList = ["Release Date", "Title"];

    return (
        <div className="div-SortControl">
        <p>Sort by: </p>
        <Dropdown options={SortByList} initialOption={selectedSortBy} onChange={(newValue) => handleChange(newValue)} />
        </div>
    );
};

export default SortControl;