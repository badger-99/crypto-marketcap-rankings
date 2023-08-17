import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import Token from './Token';

const mockStore = configureMockStore();

describe('testing the Token component', () => {
  test('correctly renders the link to the home page', () => {
    const initialState = {
      crypto: {
        cryptoArray: [
          {
            id: 'polkadot',
            rank: '11',
            symbol: 'DOT',
            name: 'Polkadot',
            supply: '1264429412.94',
            maxSupply: 'Unlimited',
            marketCapUsd: '6284893105.60',
            volumeUsd24Hr: '33786670.5474617752250812',
            priceUsd: '4.97',
            changePercent24Hr: '-0.4536725529741895',
            vwap24Hr: '4.9889329299971268',
            explorer: 'https://polkascan.io/polkadot',
          },
        ],
        error: null,
      },
    };

    const store = mockStore(initialState);

    const { getByTestId } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Token rank="11" />
        </Provider>
      </MemoryRouter>,
    );

    const homeLink = getByTestId('navLink');

    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute('href')).toBe('/');
  });

  test('renders correct cryptocurrency detais', () => {
    const initialState = {
      crypto: {
        cryptoArray: [
          {
            id: 'polkadot',
            rank: '11',
            symbol: 'DOT',
            name: 'Polkadot',
            supply: '1264429412.94',
            maxSupply: 'Unlimited',
            marketCapUsd: '6284893105.60',
            volumeUsd24Hr: '33786670.5474617752250812',
            priceUsd: '4.97',
            changePercent24Hr: '-0.4536725529741895',
            vwap24Hr: '4.9889329299971268',
            explorer: 'https://polkascan.io/polkadot',
          },
        ],
        error: null,
      },
    };

    const store = mockStore(initialState);

    const token = render(
      <MemoryRouter>
        <Provider store={store}>
          <Token rank="11" />
        </Provider>
      </MemoryRouter>,
    );

    expect(token.getByText('#11')).toBeInTheDocument();
    expect(token.getByText('Polkadot')).toBeInTheDocument();
    expect(token.getByText('(DOT)')).toBeInTheDocument();
    expect(token.getByText('Price')).toBeInTheDocument();
    expect(token.getByText('$ 4.97')).toBeInTheDocument();
    expect(token.getByText('Supply')).toBeInTheDocument();
    expect(token.getByText('1264429412.94 units')).toBeInTheDocument();
    expect(token.getByText('Max-supply')).toBeInTheDocument();
    expect(token.getByText('Unlimited units')).toBeInTheDocument();
    expect(token.getByText('Market Cap')).toBeInTheDocument();
    expect(token.getByText('$ 6284893105.60')).toBeInTheDocument();
  });
});
