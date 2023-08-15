import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { cryptoArray } = useSelector((store) => store.crypto);

  const generateNavLinks = (cryptoArray) => {
    const linkArray = [];
    for (let rank = 1; rank <= cryptoArray.length; rank += 1) {
      linkArray.push(
        <NavLink key={rank} className="link" to={`/${rank}`}>
          {`#${rank} ${cryptoArray[rank - 1].name}`}
        </NavLink>,
      );
    }
    return linkArray;
  };

  return (
    <nav>
      <ul className="column">
        {generateNavLinks(cryptoArray)}
      </ul>
    </nav>
  );
};
export default Navigation;
