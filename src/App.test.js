import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page correctly', () => {
  render(<App />);
  
  const product = screen.getByText(/biscoito cream cracker/i);
  
  expect(product).toBeInTheDocument();
});
