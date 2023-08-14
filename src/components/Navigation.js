import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink className="link" to="/1">#1</NavLink>
      </li>
      <li>
        <NavLink className="link" to="/2">#2</NavLink>
      </li>
      <li>
        <NavLink className="link" to="/3">#3</NavLink>
      </li>
      <li>
        <NavLink className="link" to="/4">#4</NavLink>
      </li>
      <li>
        <NavLink className="link" to="/5">#5</NavLink>
      </li>
      <li>
        <NavLink className="link" to="/6">#6</NavLink>
      </li>
      <li>
        <NavLink className="link" to="/7">#7</NavLink>
      </li>
      <li>
        <NavLink className="link" to="/8">#8</NavLink>
      </li>
      <li>
        <NavLink className="link" to="/9">#9</NavLink>
      </li>
      <li>
        <NavLink className="link" to="/10">#10</NavLink>
      </li>
    </ul>
  </nav>
);
export default Navigation;
