import { Routes, Route } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTokens } from './redux/slices/cryptoSlice';
import './App.css';
// import Navigation from './components/Navigation';
import Home from './components/Home';
import Rank1 from './components/Rank1';
import Rank2 from './components/Rank2';
import Rank3 from './components/Rank3';
import Rank4 from './components/Rank4';
import Rank5 from './components/Rank5';
import Rank6 from './components/Rank6';
import Rank7 from './components/Rank7';
import Rank8 from './components/Rank8';
import Rank9 from './components/Rank9';
import Rank10 from './components/Rank10';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTokens());
  });
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Rank1 />} />
        <Route path="/2" element={<Rank2 />} />
        <Route path="/3" element={<Rank3 />} />
        <Route path="/4" element={<Rank4 />} />
        <Route path="/5" element={<Rank5 />} />
        <Route path="/6" element={<Rank6 />} />
        <Route path="/7" element={<Rank7 />} />
        <Route path="/8" element={<Rank8 />} />
        <Route path="/9" element={<Rank9 />} />
        <Route path="/10" element={<Rank10 />} />
      </Routes>
    </main>
  );
};

export default App;
