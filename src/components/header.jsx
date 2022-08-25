import '../css/header.css';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <header className="header">
      <h1>AGILI</h1>
      <div className="linksContainer">
        <Link className="link" to="/">
          Hem
        </Link>
        <Link className="link" to="skills">
          Skills
        </Link>
        <Link className="link" to="">
          Kontakt
        </Link>
        <button className="signInButton">Logga in</button>
        <Box display={{ xs: 'block', sm: 'none', md: 'none', lg: 'none' }}>
          <MenuIcon fontSize="large" />
        </Box>
      </div>
    </header>
  );
}

export default Header;
