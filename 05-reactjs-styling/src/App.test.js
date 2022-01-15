import { render, screen } from '@testing-library/react';
import SCSSModuleApp from './SCSSModuleApp';

test('renders learn react link', () => {
  render(<SCSSModuleApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
