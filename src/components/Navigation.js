import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { cryptoArray } = useSelector((store) => store.crypto);
  const [querry, setQuerry] = useState('');

  const generateNavLinks = (cryptoArray) => {
    const linkArray = [];
    for (let rank = 1; rank <= cryptoArray.length; rank += 1) {
      linkArray.push(
        <NavLink key={rank} className="link" to={`/${rank}`}>
          {`#${cryptoArray[rank - 1].rank} ${cryptoArray[rank - 1].name}`}
        </NavLink>,
      );
    }
    return linkArray;
  };

  const searchByRank = (rank) => {
    const token = cryptoArray.filter((coin) => coin.rank === rank);

    if (token.length === 0) {
      return <p>Out Of Bounds.</p>;
    }

    const result = (
      <NavLink key={rank} className="link" to={`/${token[0].rank}`}>
        {`#${token[0].rank} ${token[0].name}`}
      </NavLink>
    );

    return result;
  };

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
            {searchByRank(querry)}
          </div>
        )
        : (
          <ul className="column">
            {generateNavLinks(cryptoArray)}
          </ul>
        )}
    </nav>
  );
};
export default Navigation;
