import './SearchForm.css';
import { useState } from 'react';

interface SearchFormProps {
  onSearch: (search: string) => void;
  initialSearch: string;
}

function SearchForm({initialSearch, onSearch }: SearchFormProps) {
  const [search, setSearch] = useState<string>(initialSearch);

  const onSearchClick = () => {
    onSearch && onSearch(search);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearchClick();
    }
  };

  return (
    <div className="div-searchForm">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder="Введите текст"
      />
      <button onClick={onSearchClick}>Search</button>
    </div>
  );
};

export default SearchForm;