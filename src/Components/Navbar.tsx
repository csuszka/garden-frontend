import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar () {
  return (
    <div className="navbar">
      <Link to='/'>
        <img src="/grass.png" className="nav-logo" alt="Company logo displaying grass" />
      </Link>
      <ul className="nav-links">
        <Link to='/otthon'>
          <li>Otthonfelújítás</li>
        </Link>
        <Link to='/shop'>
          <li>Termékek</li>
        </Link>
      </ul>
    </div >
  );
}

export default Navbar;