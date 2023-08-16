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
    expect(getByText('#1 testCoin')).toBeInTheDocument();
    expect(navLink.getAttribute('href')).toBe('/1');
  });

  it('renders an error message after a failed API request', () => {
    const initialState = {
      crypto: {
        cryptoArray: [
          {
            name: 'testCoin',
            rank: '1',
          },
        ],
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
