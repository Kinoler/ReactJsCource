import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import SearchForm from './components/SearchForm/SearchForm';
import GenreSelect from './components/GenreSelect/GenreSelect';
import MovieTile from './components/MovieTile/MovieTile';
import MovieDetails from './components/MovieDetails/MovieDetails';
import SortControl from './components/SortControl/SortControl';

import MovieModel from './models/MovieModel';
import MovieDetailsModel from './models/MovieDetailsModel';

  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter startValue={0} />
          <SearchForm initialSearch="None" onSearch={(val) => console.log(val)}/>
          <GenreSelect movieList={["Fantastic", "Horror", "Advanture"]} selectedMovieName='Advanture' onSelect={(val) => console.log(val)} />
          <SortControl onSelect={(val) => console.log(val)} />
          Movie Tile:
          <MovieTile movieModel={ 
            new MovieModel("https://images4.alphacoders.com/909/thumb-1920-909185.jpg", 
            'Avengers: War of Infinity', 
            2004, ['Drama', 
            'Biography', 
            'Music'])} 
            onClickCallback={(val) => console.log(val)}
            onEditClickCallback={(val) => console.log(val)}
            onDeleteClickCallback={(val) => console.log(val)}
          />
          Movie Details:
          <MovieDetails movieDetails={ 
            new MovieDetailsModel(
              "https://images4.alphacoders.com/909/thumb-1920-909185.jpg", 
              'Avengers: War of Infinity', 
              2004, 
              5.6,
              new Date(new Date().setHours(4, 16, 43)),
              "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives Of these seer-ningly unrelated people are vvoven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra")}
          />
        </header>
      </div>
    );
  }

export default App;
