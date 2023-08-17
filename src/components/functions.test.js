/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { generateNavLinks, generateRoutes, searchByRank } from './functions';

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

    const { getByText } = render(
      <MemoryRouter>
        <ul>{generateNavLinks(cryptoArray)}</ul>
      </MemoryRouter>,
    );

    expect(getByText('#1')).toBeInTheDocument();
    expect(getByText('testCoin')).toBeInTheDocument();
    expect(getByText('#2')).toBeInTheDocument();
    expect(getByText('subCoin')).toBeInTheDocument();
  });

  test('test searchByRank function with exsisting rank', () => {
    const cryptoArray = [
      {
        name: 'testCoin',
        rank: '1',
      },
      {
        name: 'subCoin',
        rank: '2',
      },
      {
        name: 'miniCoin',
        rank: '3',
      },
    ];

    const { getByText, getByRole, queryByText } = render(
      <MemoryRouter>
        <div>{searchByRank(cryptoArray, '3')}</div>
      </MemoryRouter>,
    );

    const link = getByRole('link');

    expect(queryByText('#1 testCoin')).not.toBeInTheDocument();
    expect(queryByText('#2 subCoin')).not.toBeInTheDocument();
    expect(getByText('#3')).toBeInTheDocument();
    expect(getByText('miniCoin')).toBeInTheDocument();
    expect(queryByText('Out Of Bounds.')).not.toBeInTheDocument();
    expect(link.getAttribute('href')).toBe('/3');
  });

  test('test searchByRank function with non-exsisting rank', () => {
    const cryptoArray = [
      {
        name: 'testCoin',
        rank: '1',
      },
      {
        name: 'subCoin',
        rank: '2',
      },
      {
        name: 'miniCoin',
        rank: '3',
      },
    ];

    const { getByText, queryByText } = render(
      <MemoryRouter>
        <div>{searchByRank(cryptoArray, 'anyOtherValue')}</div>
      </MemoryRouter>,
    );

    expect(queryByText('#1 testCoin')).not.toBeInTheDocument();
    expect(queryByText('#2 subCoin')).not.toBeInTheDocument();
    expect(queryByText('#3 miniCoin')).not.toBeInTheDocument();
    expect(getByText('Out Of Bounds')).toBeInTheDocument();
  });

  test('test generateRoutes function', () => {
    const cryptoArray = [
      {
        name: 'testCoin',
        rank: '1',
      },
      {
        name: 'subCoin',
        rank: '2',
      },
      {
        name: 'miniCoin',
        rank: '3',
      },
    ];

    const routes = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          {generateRoutes(cryptoArray)}
        </Routes>
      </MemoryRouter>,
    );

    expect(routes).toMatchSnapshot();
  });
});
