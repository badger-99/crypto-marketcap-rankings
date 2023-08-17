import { useState } from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { generateNavLinks, filterByRankOrName } from './functions';

const Navigation = () => {
  const { cryptoArray, isLoading, error } = useSelector((store) => store.crypto);
  const [querry, setQuerry] = useState('');

  if (isLoading) {
    return (
      <div id="loading" className="row">
        <ClipLoader
          id="loader"
          loading
          color="#5788e4"
          size="8rem"
          cssOverride={{
            borderWidth: '7px',
          }}
          speedMultiplier={1}
        />
      </div>
    );
  }

  if (error) {
    return <div id="errorMsg" className="row"><h1>{error}</h1></div>;
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
          placeholder="Filter by Rank or Name"
          onChange={(e) => setQuerry(e.target.value)}
        />
      </form>
      <ul id="coinGrid">{generateNavLinks(cryptoArray)}</ul>
      {querry && <div id="searchResult">{filterByRankOrName(cryptoArray, querry)}</div>}
    </nav>
  );
};

export default Navigation;
