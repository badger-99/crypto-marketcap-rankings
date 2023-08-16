/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { generateNavLinks } from './functions';

describe('testing helper functions', () => {
  test('test generateNavLinks function', () => {
    const cryptoArray = [
      {
        name: 'testCoin',
        rank: '1',
      },
      {
        name: 'subCoin',
        rank: '2',
      },
    ];

    const container = render(
      <MemoryRouter>
        <ul>{generateNavLinks(cryptoArray)}</ul>
      </MemoryRouter>
    );

    const li1 = screen.getByText('#1 testCoin')
    const li2 = screen.getByText('#2 subCoin')

    expect(li1).toBeInTheDocument();
    expect(li2).toBeInTheDocument();
  });
});
