import './SearchForm.css';
import { useState } from 'react';

interface SearchFormProps {
  onSearch: Function;
  initialSearch: string;
}

function SearchForm(props: SearchFormProps) {
  const [search, setSearch] = useState<string>(props.initialSearch);

  const onSearch = () => {
    props.onSearch(search);
  };

  return (
    <div className="div-searchForm">
      <p>SearchForm: </p>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Введите текст"
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchForm;