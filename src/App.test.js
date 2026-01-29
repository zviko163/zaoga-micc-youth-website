import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';

test('renders Home page', () => {
  render(<Home />);
  const welcomeElement = screen.getByText(/Welcome to ZAOGA MICC Youth/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders About page', () => {
  render(<About />);
  const headingElement = screen.getByText(/About ZAOGA MICC Youth/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders Events page', () => {
  render(<Events />);
  const headingElement = screen.getByText(/Events & Activities/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders Contact page', () => {
  render(<Contact />);
  const headingElement = screen.getByText(/Get in Touch/i);
  expect(headingElement).toBeInTheDocument();
});
