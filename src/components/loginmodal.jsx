import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import LoginForm from './loginpagecomponents/loginform';
import RegisterForm from './registerpagecomponents/registerform';

function LoginModal() {
  const [register, setRegister] = useState(false);

  const toggleRegister = () => {
    setRegister(!register);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          position: 'absolute',
          left: '40vw',
          top: '-20vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'black',
          borderRadius: '1rem',
          padding: '1rem',
          '@media (max-width: 700px)': {
            position: 'relative',
            left: 0,
            right: 0,
          },
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          className="contactMember"
          sx={{ color: 'white' }}
        >
          {register ? 'Registera dig' : 'Logga in'}
        </Typography>
        <Typography
          component="p"
          variant="p"
          className="contactMember"
          onClick={toggleRegister}
          sx={{
            color: 'white',
            textDecoration: 'underline',
            mt: '-1.5rem',
            ':hover': {
              color: '#23BE89',
              cursor: 'pointer',
            },
          }}
        >
          {register ? 'Har du redan ett konto?' : 'Har du inget konto?'}
        </Typography>
        {register ? <RegisterForm /> : <LoginForm />}
      </Box>
    </Container>
  );
}

export default LoginModal;
