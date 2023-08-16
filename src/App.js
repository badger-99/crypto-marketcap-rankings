import { Routes, Route } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTokens } from './redux/slices/cryptoSlice';
import './App.css';
import Home from './components/Home';
import { generateRoutes } from './components/functions';

const App = () => {
  const { cryptoArray } = useSelector((store) => store.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTokens());
  }, [dispatch]);

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
