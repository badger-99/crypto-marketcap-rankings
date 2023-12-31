/**
 * @jest-environment jsdom
 */
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

const mockStore = configureMockStore();

describe('test Navigation component', () => {
  test('Navigation component renders as expected', () => {
    const initialState = {
      crypto: {
        cryptoArray: [
          {
            name: 'testCoin',
            rank: '1',
          },
        ],
        isLoading: false,
        error: null,
      },
    };

    const store = mockStore(initialState);

    const { getByRole, getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </MemoryRouter>,
    );

    const navLink = getByRole('link');
    expect(getByText('#1')).toBeInTheDocument();
    expect(getByText('testCoin')).toBeInTheDocument();
    expect(navLink.getAttribute('href')).toBe('/1');
  });

  test('Navigation component renders loading spinner during api call', () => {
    const initialState = {
      crypto: {
        cryptoArray: [
          {
            name: 'testCoin',
            rank: '1',
          },
        ],
        isLoading: true,
        error: null,
      },
    };

    const store = mockStore(initialState);

    const nav = render(
      <MemoryRouter>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </MemoryRouter>,
    );

    expect(nav).toMatchSnapshot();
  });

  test('Navigation component renders an error message after a failed API request', () => {
    const initialState = {
      crypto: {
        cryptoArray: [
          {
            name: 'testCoin',
            rank: '1',
          },
        ],
        isLoading: false,
        error: 'There has been an error',
      },
    };

    const store = mockStore(initialState);

    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </MemoryRouter>,
    );

    expect(getByText('There has been an error')).toBeInTheDocument();
  });
});
