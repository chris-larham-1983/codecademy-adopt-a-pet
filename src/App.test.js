import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('The <App /> component:', () => {

  beforeEach(() => {
    render(<App />);
  });

  it('renders an "All Pets" link', () => {
    const allPetsLink = screen.getByText(/All Pets/i);
    expect(allPetsLink).toBeInTheDocument();
  });

  it('renders a "Dogs" link', () => {
    const dogsLink = screen.getByText(/Dogs/i);
    expect(dogsLink).toBeInTheDocument();
    fireEvent.click(dogsLink);
  });

  it('renders a "Cats" link', () => {
    const catsLink = screen.getByText(/Dogs/i);
    expect(catsLink).toBeInTheDocument();
  });

  it('renders a "Rabbits" link', () => {
    const rabbitsLink = screen.getByText(/Rabbits/i);
    expect(rabbitsLink).toBeInTheDocument();
  });

  it('renders a "Birds" link', () => {
    const birdsLink = screen.getByText(/Birds/i);
    expect(birdsLink).toBeInTheDocument();
  });

  it('renders a footer element that gives details of this project', () => {
    const footerElement = screen.getByText(/Petlover: example pet adoption website created using HTML5, CSS3, and React JavaScript as part of Codecademy's 'Full-Stack Engineer' course./i);
    expect(footerElement).toBeInTheDocument();
  });

  describe('App navigation', () => {

    it('begins on the homepage', () => {
      expect(window.location.pathname).toMatch('/');
    });

    it('continues to the "dog-specific" page when the "Dogs" link is clicked', () => {
      fireEvent.click(screen.getByText(/Dogs/i));
      expect(window.location.pathname).toMatch('/dog');
    });

    it('continues to the "cat-specific" page when the "Cats" link is clicked', () => {
      fireEvent.click(screen.getByText(/Cats/i));
      expect(window.location.pathname).toMatch('/cat');
    });

    it('continues to the "rabbit-specific" page when the "Rabbits" link is clicked', () => {
      fireEvent.click(screen.getByText(/Rabbits/i));
      expect(window.location.pathname).toMatch('/rabbit');
    });

    it('continues to the "bird-specific" page when the "Birds" link is clicked', () => {
      fireEvent.click(screen.getByText(/Birds/i));
      expect(window.location.pathname).toMatch('/bird');
    });
  });
});
