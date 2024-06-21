import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/footer/footer';
import '@testing-library/jest-dom/extend-expect';

describe('Footer Component', () => {
  it('renders footer with correct content', async () => {
    render(<Footer />);

    expect(screen.getByText(/Sobre Nós/i)).toBeInTheDocument();
    expect(screen.getByText(/Endereço/i)).toBeInTheDocument();
    expect(screen.getByText(/Redes Sociais/i)).toBeInTheDocument();
    expect(screen.getByText(/Localização/i)).toBeInTheDocument();
  });
});
