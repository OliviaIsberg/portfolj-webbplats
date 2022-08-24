import '../css/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>AGILI</h1>
      <div className="linksContainer">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="skills">
          Skills
        </Link>
        <Link className="link" to="">
          Contact
        </Link>
        <button className="signInButton">Sign in</button>
      </div>
    </header>
  );
}

export default Header;
