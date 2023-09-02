import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import SearchForm from './SearchForm';

test('Component renders an input with the value equal to initial value passed in props', () => {
    var initialSearch = "None";
    var onSearch = jest.fn();
    render(<SearchForm initialSearch={initialSearch} onSearch={onSearch}/>);
    
    const element = screen.getByDisplayValue(`${initialSearch}`);
    expect(element).toBeInTheDocument();
});

test('After typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', async () => {
    var initialSearch = "None";
    var keyClicked = 'A';
    var onSearch = jest.fn();
    render(<SearchForm initialSearch={initialSearch} onSearch={onSearch}/>);
    
    const searchInput = screen.getByDisplayValue(initialSearch);
    expect(searchInput).toBeInTheDocument();
    fireEvent.keyPress(searchInput, { key: keyClicked, code: `Key${keyClicked}`});

    const updatedSearchValue = `${initialSearch}${keyClicked}`;
    await waitFor(() => {
      const searchInputq = screen.getByDisplayValue(updatedSearchValue);
      expect(searchInputq).toBeInTheDocument();
    });
    
    const searchButton = screen.getByText(`Search`);
    fireEvent.click(searchButton);

    expect(onSearch).toBeCalledWith(updatedSearchValue); 
  });

test('After typing to the input and pressing Enter key, the "onChange" prop is called with proper value', async () => {
    var initialSearch = "None";
    var keyClicked = 'A';
    var onSearch = jest.fn();
    render(<SearchForm initialSearch={initialSearch} onSearch={onSearch}/>);

    const searchInput = screen.getByDisplayValue(initialSearch);
    fireEvent.keyPress(searchInput, { key: keyClicked, code: `Key${keyClicked}`});

    const updatedSearchValue = `${initialSearch}${keyClicked}`;
    await waitFor(() => {
      const searchInputq = screen.getByDisplayValue(updatedSearchValue);
      expect(searchInputq).toBeInTheDocument();
    });

    fireEvent.keyPress(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    await waitFor(() => {
        expect(onSearch).toBeCalledWith(updatedSearchValue); 
    });
  });