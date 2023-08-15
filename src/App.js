import { Routes, Route } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTokens } from './redux/slices/cryptoSlice';
import './App.css';
import Home from './components/Home';
import Token from './components/Token';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTokens());
  }, [dispatch]);

  const generateRoutes = () => {
    const routes = [];

    for (let rank = 1; rank <= 10; rank += 1) {
      routes.push(
        <Route
          key={rank}
          path={`/${rank}`}
          element={<Token rank={`${rank.toString()}`} />}
        />,
      );
    }

    return routes;
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        {generateRoutes()}
      </Routes>
    </main>
  );
};

export default App;
