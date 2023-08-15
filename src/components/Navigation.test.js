import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

const mockStore = configureMockStore();

test('Navigation component renders as expected', () => {
  const initialState = {
    crypto: {
      cryptoArray: [
        {name:'testCoin',}
      ]
    }
  }

  const store = mockStore(initialState);

  const {getByRole, getByText} = render(
    <MemoryRouter>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </MemoryRouter>,
  );

  const navLink = getByRole('link')
  expect(getByText('#1 testCoin')).toBeInTheDocument();
  expect(navLink.getAttribute('href')).toBe('/1');
});
