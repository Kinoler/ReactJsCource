import './SearchForm.css';
import { useState } from 'react';

interface SearchFormProps {
  onSearch: (search: string) => void;
  initialSearch: string;
}

function SearchForm(props: SearchFormProps) {
  const [search, setSearch] = useState<string>(props.initialSearch);

  const onSearch = () => {
    props.onSearch(search);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onSearch(search);
    }
  };

  return (
    <div className="div-searchForm">
      <p>SearchForm: </p>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder="Введите текст"
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchForm;