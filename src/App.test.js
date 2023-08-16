import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import App from './App';

const mockStore = configureMockStore([thunk]);

test('App component renders as expected', () => {
  const initialState = {
    crypto: {
      cryptoArray: [
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
      ],
    },
  };

  const store = mockStore(initialState);

  const app = render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  );

  expect(app).toMatchSnapshot();
});
