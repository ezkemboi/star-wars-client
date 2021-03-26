import React from 'react';
import { render, screen } from '@testing-library/react';
import Routes from './routes';

test('renders learn react link', () => {
  render(<Routes />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
