import { Link } from 'react-router-dom';
import './styles/Navbar.scss';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
    <div className="container-fluid">
      <h1 className="navbar-brand mb-0 title">PokeReact</h1>
    </div>
    <div className="navbar-nav">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/pokemon">Pokemon</Link>
      <Link className="nav-link" to="/about">About</Link>
    </div>
  </nav>
);

export default Navbar;
