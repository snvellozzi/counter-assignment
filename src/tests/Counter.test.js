// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/App';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterElement = screen.getAllByTestId("count")[0];
  expect(counterElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterElement = screen.getAllByTestId("count")[0];
  expect(counterElement).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterElement = screen.getAllByTestId("count")[0];
  const incrementButton = screen.getAllByText("+")[0];
  fireEvent.click(incrementButton);
  expect(counterElement).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterElement = screen.getAllByTestId("count")[0];
  const decrementButton = screen.getAllByText("-")[0];
  fireEvent.click(decrementButton);
  expect(counterElement).toHaveTextContent("-1");
});

