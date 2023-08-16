import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Token = ({ rank }) => {
  const { cryptoArray } = useSelector((store) => store.crypto);

  const token = cryptoArray.filter((coin) => coin.rank === rank)[0];

  return (
    <article>
      <header>
        <div>
          <NavLink className="link" to="/" data-testid="navLink">
            home
          </NavLink>
        </div>
        <p>Coin Stats</p>
        <div>dummy logos</div>
      </header>
      <div>
        <h1>{`#${token.rank}`}</h1>
        <h2>{`Name: ${token.name} (${token.symbol})`}</h2>
        <p>
          Market Cap:
          <span>{`$ ${token.marketCapUsd}`}</span>
        </p>
        <p>
          Price:
          <span>{`$ ${token.priceUsd}`}</span>
        </p>
        <p>
          Supply:
          <span>{`${token.supply} units`}</span>
        </p>
        <p>
          Max-supply:
          <span>{`${token.maxSupply} units`}</span>
        </p>
      </div>
    </article>
  );
};

Token.propTypes = {
  rank: PropTypes.string.isRequired,
};
export default Token;
