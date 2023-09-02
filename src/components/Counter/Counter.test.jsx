import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter/Counter';

test('Component renders initial value provided in props', () => {
    var initValue = 5;
    render(<Counter startValue={initValue} />);
    const counterText = screen.getByText(`${initValue}`);
    
    expect(counterText).toBeInTheDocument();
});

test('Click event on "decrement" button decrements the displayed value', () => {
    var initValue = 5;
    render(<Counter startValue={initValue} />);
    const counterText = screen.getByText(`${initValue}`);
  
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton); 
    expect(counterText).toHaveTextContent(`${initValue - 1}`); 
  });

test('Click event on "increment" button increments the displayed value', () => {
    var initValue = 5;
    render(<Counter startValue={initValue} />);
    const counterText = screen.getByText(`${initValue}`);
  
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    expect(counterText).toHaveTextContent(`${initValue + 1}`); 
  });