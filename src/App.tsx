import React from 'react';
import './App.css';
import './styles.css';
import Counter from './components/Counter/Counter';
import SearchForm from './components/SearchForm/SearchForm';
import GenreSelect from './components/GenreSelect/GenreSelect';
import MovieTile from './components/MovieTile/MovieTile';
import MovieDetails from './components/MovieDetails/MovieDetails';
import SortControl from './components/SortControl/SortControl';
import MovieForm from './components/MovieForm/MovieForm';

import MovieDetailsModel from './models/MovieDetailsModel';
import MovieEditModel from './models/MovieEditModel';

const mockData = [{
  ImageUrl: "https://images4.alphacoders.com/909/thumb-1920-909185.jpg", 
  MovieName: 'Avengers: War of Infinity', 
  ReleaseYear: 2004, 
  Rating: 5.6,
  Duration: new Date(new Date().setHours(4, 16, 43)),
  Description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives Of these seer-ningly unrelated people are vvoven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
  Genres: ['Horror'],
}];

  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter startValue={0} />
          <SearchForm initialSearch="None" onSearch={(val) => console.log(val)}/>
          <GenreSelect movieList={["Fantastic", "Horror", "Advanture"]} selectedMovieName='Advanture' onSelect={(val) => console.log(val)} />
          <SortControl onSelect={(val) => console.log(val)} />
          Movie Tile:
          <MovieTile movieModel={ mockData[0] } 
            onClickCallback={(val) => console.log(val)}
            onEditClickCallback={(val) => console.log(val)}
            onDeleteClickCallback={(val) => console.log(val)}
          />
          Movie Details:
          <MovieDetails movieDetails={ mockData[0]  }/>
        </header>
      </div>
    );
  }

export default App;
