import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Token = ({ rank }) => {
  const { cryptoArray, error } = useSelector((store) => store.crypto);

  if (error) {
    return <h1>{error}</h1>;
  }

  const token = cryptoArray.filter((coin) => coin.rank === rank)[0];

  return (
    <article>
      <NavLink className='link' to='/' data-testid='navLink'>
        home
      </NavLink>
      <div>
        <h1>{`#${token.rank}`}</h1>
        <h2>{`Name: ${token.name} (${token.symbol})`}</h2>
        <h4>{`Price: $ ${token.priceUsd}`}</h4>
        <h4>{`Supply: ${token.supply} units`}</h4>
        <h4>{`Max-supply: ${token.maxSupply} units`}</h4>
        <h4>{`Market Cap: $ ${token.marketCapUsd}`}</h4>
      </div>
    </article>
  );
};

Token.propTypes = {
  rank: PropTypes.string.isRequired,
};
export default Token;
