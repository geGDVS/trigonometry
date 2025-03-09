import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/常见数学三角公式/i);
  expect(linkElement).toBeInTheDocument();
});