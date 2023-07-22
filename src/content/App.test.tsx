// import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('render App', async () => {
    render(<App />);

    expect(screen.getByText('PATH:HOME')).toBeInTheDocument();
  });
});
