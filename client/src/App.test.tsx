import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.scrollTo = jest.fn();
});

beforeEach(() => {
  window.history.replaceState({}, '', '/');
  global.fetch = jest.fn().mockResolvedValue({
    json: async () => []
  }) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks();
});

test('renders the portfolio hero content', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /alejandro monaco/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/idioma/i)).toBeInTheDocument();
  expect(screen.getByText(/ayudo a operaciones y producto/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /appoke/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /appoke/i }).length).toBeGreaterThan(0);
});

test.each([
  ['email-automation', 'Automatización Gmail'],
  ['visual-lab', 'Visual Lab'],
  ['bicingflow', 'BicingFlow'],
  ['sail-tracker', 'LS Sail Tracker'],
  ['web-cv', 'Web CV']
])('shows the case at /%s', (slug, title) => {
  window.history.replaceState({}, '', `/${slug}`);
  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: title })).toBeInTheDocument();
  expect(document.title).toContain(title);
});

test('opens a new case from the hub and updates its language', () => {
  render(<App />);

  const card = screen.getByRole('link', { name: 'Web CV' });
  fireEvent.click(card);
  expect(window.location.pathname).toBe('/web-cv');
  expect(screen.getByRole('heading', { level: 1, name: 'Web CV' })).toBeInTheDocument();

  fireEvent.change(screen.getByRole('combobox', { name: 'Idioma' }), { target: { value: 'en' } });
  expect(screen.getByRole('heading', { level: 1, name: 'Portfolio Website' })).toBeInTheDocument();
  expect(document.title).toContain('Portfolio Website');
});
