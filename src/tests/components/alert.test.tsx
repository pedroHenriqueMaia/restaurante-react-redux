import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from '../../components/alert/alert';
import '@testing-library/jest-dom/extend-expect';

describe('Alert Component', () => {
  it('renders alert with correct message', () => {
    const message = 'This is a test message';

    render(<Alert message={message} />);

    const alertElement = screen.getByText(message);
    expect(alertElement).toBeInTheDocument();

    expect(alertElement).toHaveClass('alert');
    expect(alertElement).toHaveClass('text-center');
  });
});
