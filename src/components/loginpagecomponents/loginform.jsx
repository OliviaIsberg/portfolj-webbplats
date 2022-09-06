import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from 'react';

const validationSchema = yup.object({
  password: yup.string().required('Vänligen skriv ditt lösenord').min(5),
  email: yup.string().email().required('Ange en giltig e-post'),
});

function LoginForm() {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [register, setRegister] = useState('');

  const handleSend = (event) => {
    event.preventDefault();
    formik.handleSubmit();
    handleSubmit();
    alert("logged in / registered");
  };

  const changeLogin = () => {
    setRegister(true)
  }

  const changeRegister = () => {
    setRegister(false)
  }

  const handleSubmit = () => {
    setEmail('')
    setPassword('')
  }

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  if(register){ return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          position: 'absolute',
          left: "40vw",
          top: "-20vh",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: "black",
          borderRadius: "1rem",
          padding: "1rem",
          '@media (max-width: 700px)' : {
            position: "relative",
            left: 0,
            right: 0,
          }
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          className="contactMember"
          sx={{ color: 'white' }}
        >
          Registera dig
        </Typography>
        <Typography
          component="p"
          variant="p"
          className='contactMember'
          onClick={() => changeRegister()}
          sx={{ color: "white", textDecoration: "underline", mt: "-1.5rem", ":hover": {
            color: "#23BE89", cursor: "pointer",
          } }}>
            Har du redan ett konto?
        </Typography>
        <Box component="form" onSubmit={handleSend}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                inputProps={{maxLength: 20}}
                onChange={(event) => setEmail(event.target.value)}
                InputLabelProps={{ className: 'textfield_label' }}
                sx={{
                  color: 'white',
                  backgroundColor: 'black',
                  border: '1px solid #23BE99',
                  borderRadius: '20px',
                  outline: 'none',
                  input: { color: 'white' },
                  inputLabel: { color: 'white' },
                  textfield_label: { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="password"
                InputLabelProps={{ className: 'textfield_label' }}
                sx={{
                  color: 'white',
                  backgroundColor: 'black',
                  border: '1px solid #23BE99',
                  borderRadius: '20px',
                  outline: 'none',
                  input: { color: 'white' },
                  inputLabel: { color: 'white' },
                  textfield_label: { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="center"
            sx={{
              mt: 3,
              mb: 2,
              width: '250px',
              color: 'white',
              backgroundColor: '#23BE99',
              border: '1px solid #23BE99',
              borderRadius: '20px',
              outline: 'none',
              input: { color: 'white' },
              inputLabel: { color: 'white' },
              textfield_label: { color: 'white' },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '@media (max-width: 700px)' : {
                width: "100%",
              }
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  )}else return(
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          position: 'absolute',
          left: "40vw",
          top: "-20vh",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: "black",
          borderRadius: "1rem",
          padding: "1rem",
          '@media (max-width: 700px)' : {
            position: "relative",
            left: 0,
            right: 0,
          }
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          className="contactMember"
          sx={{ color: 'white' }}
        >
          Logga in
        </Typography>
        <Typography
          component="p"
          variant="p"
          className='contactMember'
          onClick={() => changeLogin()}
          sx={{ color: "white", textDecoration: "underline", mt: "-1.5rem", ":hover": {
            color: "#23BE89", cursor: "pointer",
          } }}>
            Har du inget konto?
        </Typography>
        <Box component="form" onSubmit={handleSend}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                inputProps={{maxLength: 20}}
                onChange={(event) => setEmail(event.target.value)}
                InputLabelProps={{ className: 'textfield_label' }}
                sx={{
                  color: 'white',
                  backgroundColor: 'black',
                  border: '1px solid #23BE99',
                  borderRadius: '20px',
                  outline: 'none',
                  input: { color: 'white' },
                  inputLabel: { color: 'white' },
                  textfield_label: { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="password"
                InputLabelProps={{ className: 'textfield_label' }}
                sx={{
                  color: 'white',
                  backgroundColor: 'black',
                  border: '1px solid #23BE99',
                  borderRadius: '20px',
                  outline: 'none',
                  input: { color: 'white' },
                  inputLabel: { color: 'white' },
                  textfield_label: { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="center"
            sx={{
              mt: 3,
              mb: 2,
              width: '250px',
              color: 'white',
              backgroundColor: '#23BE99',
              border: '1px solid #23BE99',
              borderRadius: '20px',
              outline: 'none',
              input: { color: 'white' },
              inputLabel: { color: 'white' },
              textfield_label: { color: 'white' },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '@media (max-width: 700px)' : {
                width: "100%",
              }
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginForm;
