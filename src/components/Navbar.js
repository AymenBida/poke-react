import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>PokeReact</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/pokemon">Pokemon</Link>
      <Link to="/about">About</Link>
    </div>
  </nav>
);

export default Navbar;
