import { render, screen, fireEvent } from '@testing-library/react';
import GenreSelect from './GenreSelect';

test('Component renders all genres passed in props', () => {
    var movieList = ["Fantastic", "Horror", "Advanture"];
    var selected = "Advanture";
    render(<GenreSelect genreList={movieList} selectedGenre={selected} onSelect={() => null} />);
    movieList.forEach(el => {
        const counterText = screen.getByText(`${el}`);
        expect(counterText).toBeInTheDocument();
    });
});

test('Component highlights a selected genre passed in props', () => {
    var movieList = ["Fantastic", "Horror", "Advanture"];
    var selected = "Advanture";
    render(<GenreSelect genreList={movieList} selectedGenre={selected} onSelect={() => null} />);
  
    const selectedEl = screen.getByText(`${selected}`);
    expect(selectedEl).toHaveClass('li-selected'); 
  });

test('After a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
    var movieList = ["Fantastic", "Horror", "Advanture"];
    var selected = "Advanture";
    var onSelect = jest.fn();

    render(<GenreSelect genreList={movieList} selectedGenre={selected} onSelect={onSelect} />);

    var toClickName = "Fantastic";
    const toClickButton = screen.getByText(toClickName);
    fireEvent.click(toClickButton);
    expect(onSelect).toBeCalledWith(toClickName); 
  });

  