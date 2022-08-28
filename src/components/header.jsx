import '../css/header.css';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
          <MenuIcon onClick={() => setOpen(!open)} fontSize="large" />
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
      <Box
        sx={{
          backdropFilter: 'blur(5px)',
          flexGrow: 1,
          position: 'absolute',
          width: '100vw',
          top: 0,
          bottom: 0,
          zIndex: 1,
        }}
        display={
          open ? { xs: 'block', sm: 'block', md: 'none', lg: 'none' } : 'none'
        }
      >
        <Box
          sx={{
            marginTop: '10rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
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
      </Box>
    </>
  );
}

export default Header;
