import { Routes, Route } from 'react-router';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <main>
      <h1>Top-10 Crypto Currencies</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#1" element={<Rank1 />} />
        <Route path="/#2" element={<Rank2 />} />
        <Route path="/#3" element={<Rank3 />} />
        <Route path="/#4" element={<Rank4 />} />
        <Route path="/#5" element={<Rank5 />} />
        <Route path="/#6" element={<Rank6 />} />
        <Route path="/#7" element={<Rank7 />} />
        <Route path="/#8" element={<Rank8 />} />
        <Route path="/#9" element={<Rank9 />} />
        <Route path="/#10" element={<Rank10 />} />
      </Routes>
      <Navigation />
    </main>
  );
}

export default App;
