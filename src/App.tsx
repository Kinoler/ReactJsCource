import React from 'react';
import './App.css';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter startValue={0} />
        <SearchForm initialSearch="None" onSearch={(val) => console.log(val)}/>
        <GenreSelect movieList={["Fantastic", "Horror", "Advanture"]} selectedMovieName='Advanture' onSelect={(val) => console.log(val)} />
      </header>
    </div>
  );
}

export default App;
