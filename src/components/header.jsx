import '../css/header.css';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Header() {
  const { showMenu, setShowMenu } = useState(false);

  return (
    <Box className="header">
      <Box
        display={{
          xs: 'flex',
          sm: 'flex',
          md: 'none',
          lg: 'none',
          alignItems: 'center',
        }}
      >
        <MenuIcon setShowMenu={true} fontSize="large" />
      </Box>

      <h1>AGILI</h1>
      <div className="linksContainer">
        <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
          <Link className="link" to="/">
            Hem
          </Link>
          <Link className="link" to="skills">
            Skills
          </Link>
          <Link className="link" to="">
            Kontakt
          </Link>
        </Box>
        <button className="signInButton">Logga in</button>
      </div>
    </Box>
  );
}

export default Header;
