import { useState } from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { generateNavLinks, searchByRank } from './functions';

const Navigation = () => {
  const { cryptoArray, isLoading, error } = useSelector((store) => store.crypto);
  const [querry, setQuerry] = useState('');

  if (isLoading) {
    return (
      <div>
        <ClipLoader loading color="blue" size={32} speedMultiplier={1} />
      </div>
    );
  }

  if (error) {
    return <div><h1>{error}</h1></div>;
  }

  return (
    <nav id="coinNav">
      <form
        id="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Search by Rank"
          onChange={(e) => setQuerry(e.target.value)}
        />
      </form>
      <ul id="coinGrid">{generateNavLinks(cryptoArray)}</ul>
      {querry && <div id="searchResult">{searchByRank(cryptoArray, querry)}</div>}
    </nav>
  );
};

export default Navigation;
