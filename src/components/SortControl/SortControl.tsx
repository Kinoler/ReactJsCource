import Dropdown from '../Dropdown/Dropdown';
import './SortControl.css';

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
        <Dropdown options={sortByList} initialOption={selectedSortBy} onChange={(newValue) => handleChange(newValue)} />
        </div>
    );
};

export default SortControl;