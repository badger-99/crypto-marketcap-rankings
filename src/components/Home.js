import { SiCoinmarketcap } from 'react-icons/si';
import { BsFillMicFill } from 'react-icons/bs';
import { IoSettingsSharp } from 'react-icons/io5';
import Navigation from './Navigation';

const Home = () => (
  <div>
    <header>
      <div>
        <span>Coin</span>
        <span>Market</span>
        <span>Cap</span>
      </div>
      <div><SiCoinmarketcap /></div>
      <div>
        <BsFillMicFill />
        <IoSettingsSharp />
      </div>
    </header>
    <h1>Top-10 Crypto Currencies</h1>
    <Navigation />
  </div>
);
export default Home;
