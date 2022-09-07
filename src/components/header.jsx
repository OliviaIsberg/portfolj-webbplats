import '../css/header.css';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
/* import LoginIcon from '@mui/icons-material/Login'; */
import { useState, useContext } from 'react';
/* import LoginForm from '../components/loginpagecomponents/loginform'; */
import { Modal } from '@mui/material';
import LoginModal from './loginmodal';
import { LogInContext } from '../LogInContext';


function Header() {
  const { loggedInUser, setLoggedInUser } = useContext(LogInContext);
  

  const [open, setOpen] = useState(false);


  const [loginModal, setLoginModal] = useState(false);

  const handleClose = () => setLoginModal(false);

  const handleClick = () => {
    console.log('open');
    setLoginModal(true);
  };

  const handleLogOut = () => {
    setLoginModal(false)
    setLoggedInUser(false)
  }


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
          {!loggedInUser ? 
          ( <><button className="signInButton" preventDefault onClick={() => handleClick()}>Logga in</button></>
          )
        : (
          <><button className="signInButton" preventDefault onClick={() => handleLogOut()}>Logga ut</button></>
        )}
          {loginModal && (
            <Modal
              open={loginModal}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="confirmationMessage">
                {/* <LoginForm /> */}
                <LoginModal />
              </div>
            </Modal>
          )}
        </div>
      </Box>
      <Box
        sx={{
          background: 'rgba(0, 0, 0, .2)',
          backdropFilter: 'blur(10px)',
          flexGrow: 1,
          position: 'absolute',
          width: '100%',
          top: 0,
          bottom: 0,
          zIndex: 2,
          transform: open ? 'translate(0, 0)' : 'translate(0, -100vh)',
          transition: 'transform ease-in-out 0.5s',
        }}
        display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }}
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
