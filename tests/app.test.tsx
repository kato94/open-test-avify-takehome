import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from 'src/app';
import { useGenerations } from 'src/hooks';

jest.mock('src/hooks', () => ({
  useGenerations: jest.fn(() => ({
    generations: [
      { name: 'Gas', perc: 50 },
      { name: 'Nuclear', perc: 20 },
      { name: 'Renewables', perc: 30 },
    ],
    isLoading: false,
    isError: false,
  })),
}));

test('renders UK Energy Mix title', () => {
  render(<App />);
  const title = screen.getByText(/UK Energy Mix/i);
  expect(title).toBeInTheDocument();
});

test('renders loading component', () => {
  (useGenerations as jest.Mock).mockImplementationOnce(() => ({
    generations: [],
    isLoading: true,
    isError: false,
  }));

  render(<App />);
  const loading = screen.getByText(/Loading.../i);
  expect(loading).toBeInTheDocument();
});

test('renders error message', () => {
  (useGenerations as jest.Mock).mockImplementationOnce(() => ({
    generations: [],
    isLoading: false,
    isError: true,
  }));

  render(<App />);
  const error = screen.getByText(/something went wrong/i);
  expect(error).toBeInTheDocument();
});

test('renders cards', () => {
  render(<App />);
  const gas = screen.getByText(/Gas/i);
  const nuclear = screen.getByText(/Nuclear/i);
  const renewables = screen.getByText(/Renewables/i);

  expect(gas).toBeInTheDocument();
  expect(nuclear).toBeInTheDocument();
  expect(renewables).toBeInTheDocument();
});
