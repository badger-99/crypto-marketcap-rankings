import { useState } from 'react';
import { useSelector } from 'react-redux';
import { generateNavLinks, searchByRank } from './functions';

const Navigation = () => {
  const { cryptoArray } = useSelector((store) => store.crypto);
  const [querry, setQuerry] = useState('');

  return (
    <nav>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}
      >
        <input type="text" placeholder="Search by Rank" onChange={(e) => setQuerry(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {querry
        ? (
          <div>
            {searchByRank(cryptoArray, querry)}
          </div>
        )
        : (
          <ul>
            {generateNavLinks(cryptoArray)}
          </ul>
        )}
    </nav>
  );
};

export default Navigation;
