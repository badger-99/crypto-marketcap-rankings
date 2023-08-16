import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { generateNavLinks } from './functions';

const Navigation = () => {
  const { cryptoArray, isLoading, error } = useSelector((store) => store.crypto);

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
      <ul id="coinGrid">{generateNavLinks(cryptoArray)}</ul>
    </nav>
  );
};

export default Navigation;
