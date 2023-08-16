import { DateTime } from 'luxon';
import { SiCoinmarketcap } from 'react-icons/si';
import { BsFillMicFill } from 'react-icons/bs';
import { IoSettingsSharp } from 'react-icons/io5';
import Navigation from './Navigation';

const dt = DateTime.now();
const date = dt.toLocaleString(DateTime.DATE_MED);
const Home = () => (
  <div>
    <header className="row">
      <div>
        {date}
      </div>
      <p>Rankings</p>
      <div>
        <BsFillMicFill />
        <IoSettingsSharp />
      </div>
    </header>
    <div className="row">
      <SiCoinmarketcap />
      <h1>Top-10 Crypto Currencies</h1>
    </div>
    <Navigation />
  </div>
);
export default Home;
