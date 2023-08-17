import { NavLink, Route } from 'react-router-dom';
import Token from './Token';

export const generateNavLinks = (cryptoArray) => {
  const linkArray = [];
  for (let rank = 1; rank <= cryptoArray.length; rank += 1) {
    linkArray.push(
      <li key={rank} className="gridItem ">
        <NavLink className="link row gridLink" to={`/${rank}`}>
          <h2>{`#${cryptoArray[rank - 1].rank}`}</h2>
          <p>{`${cryptoArray[rank - 1].name}`}</p>
        </NavLink>
      </li>,
    );
  }
  return linkArray;
};

export const searchByRank = (arr, rank) => {
  const token = arr.filter((coin) => coin.rank === rank);

  if (token.length === 0) {
    return <span id="searchError" className="column">Out Of Bounds</span>;
  }

  const result = (
    <NavLink key={rank} id="searchLink" className="link column" to={`/${token[0].rank}`}>
      <h2>{`#${token[0].rank}`}</h2>
      <p>{`${token[0].name}`}</p>
    </NavLink>
  );

  return result;
};

export const generateRoutes = (arr) => {
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
