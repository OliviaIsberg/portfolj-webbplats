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
          <MenuIcon
            sx={{ color: '#ffffff', fontSize: '3rem' }}
            onClick={() => setOpen(!open)}
            // fontSize="large"
          />
        </Box>

        <Link style={{ textDecoration: 'none' }} to="/">
          <h1>AGILI</h1>
        </Link>
        <div className="linksContainer">
          <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
            <Link className="headerLink" to="/">
              Hem
            </Link>
            <Link className="headerLink" to="/skills/Scrumpage">
              Skills
            </Link>
            <Link className="headerLink" to="contact">
              Kontakt
            </Link>
          </Box>
          <button className="signInButton">Logga in</button>
        </div>
      </Box>
      <Box
        sx={{
          backdropFilter: 'blur(10px)',
          flexGrow: 1,
          position: 'absolute',
          width: '100%',
          top: 0,
          bottom: 0,
          zIndex: 2,
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
          <Link onClick={() => setOpen(false)} className="headerLink" to="/">
            Hem
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="headerLink"
            to="/skills/Scrumpage"
          >
            Skills
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="headerLink"
            to="contact"
          >
            Kontakt
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Header;
