import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsChevronLeft, BsFillMicFill } from 'react-icons/bs';
import { IoSettingsSharp } from 'react-icons/io5';

const Token = ({ rank }) => {
  const { cryptoArray } = useSelector((store) => store.crypto);

  const token = cryptoArray.filter((coin) => coin.rank === rank)[0];

  return (
    <article>
      <header className="row">
        <div className="homeLink first">
          <NavLink className="link" to="/" data-testid="navLink">
            <BsChevronLeft />
          </NavLink>
        </div>
        <p>Stats</p>
        <div className="row dummyIcons">
          <BsFillMicFill />
          <IoSettingsSharp />
        </div>
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
