import { Routes, Route } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTokens } from './redux/slices/cryptoSlice';
import './App.css';
import Home from './components/Home';
import Token from './components/Token';

const App = () => {
  const { cryptoArray } = useSelector((store) => store.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTokens());
  }, [dispatch]);

  const generateRoutes = (arr) => {
    const routes = [];

    for (let rank = 1; rank <= arr.length; rank += 1) {
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
        {generateRoutes(cryptoArray)}
      </Routes>
    </main>
  );
};

export default App;
