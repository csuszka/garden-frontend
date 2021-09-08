import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar () {
  return (
    <div className="navbar">
      <Link to='/'>
        <img src="/grass.png" className="nav-logo" alt="Company logo displaying grass" />
      </Link>
      <ul className="nav-links">
        <Link to='/szolgaltatasok'>
          <li>Szolgáltatások</li>
        </Link>
        <Link to='/termekek'>
          <li>Termékek</li>
        </Link>
        <Link to='/referenciak'>
          <li>Referenciák</li>
        </Link>
        <Link to='/elerhetosegek'>
          <li>Elérhetőségek</li>
        </Link>
      </ul>
    </div >
  );
}

export default Navbar;