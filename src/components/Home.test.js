import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/store'
import Home from './Home';

test('Home component renders as expected', () => {
  const home = render(
    <MemoryRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </MemoryRouter>,
  );

  expect(home).toMatchSnapshot();
});
