import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FakeDatabaseContext } from '../../FakeDatabaseContext';
import { useContext, useState, useRef, useEffect } from 'react';

const validationSchema = yup.object({
  password: yup.string().required('Vänligen skriv ditt lösenord').min(5),
  firstName: yup.string().required('Vänligen skriv ditt lösenord').min(1),
  lastName: yup.string().required('Vänligen skriv ditt lösenord').min(1),
  email: yup.string().email().required('Ange en giltig e-post'),
  // firstName: yup.string().firstName().required().min(1),
  // LastName: yup.string().LastName().required('Ange ett efternamn').min(1),
});

function RegisterForm(props) {
  const { registerUser } = useContext(FakeDatabaseContext);
  const [registerError, setRegisterError] = useState(null);
  const handleClose = props.handleClose;
  const lastNameInput = useRef();

  useEffect(() => {
    lastNameInput.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        registerUser(values);
        handleClose();
      } catch (e) {
        setRegisterError(e.message);
      }
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            inputRef={lastNameInput}
            required
            fullWidth
            id="lastName"
            label="Efternamn"
            name="lastName"
            value={formik.values.lastName}
            onFocus={formik.handleBlur}
            onChange={formik.handleChange}
            // onChange={formik.handleChange}
            autoComplete="LastName"
            InputLabelProps={{ className: 'textfield_label' }}
            sx={{
              color: 'white',
              backgroundColor: 'black',
              border: !(formik.touched.lastName && formik.errors.lastName)
                ? '1px solid #23BE99'
                : '1px solid #FF0000',
              borderRadius: '20px',
              outline: 'none',

              input: {
                color: 'white',
                '&:-webkit-autofill': {
                  WebkitTextFillColor: '#FFF',
                  WebkitBackgroundClip: 'text !important',
                },
              },
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
            id="firstName"
            label="Förnamn"
            name="firstName"
            value={formik.values.firstName}
            onFocus={formik.handleBlur}
            onChange={formik.handleChange}
            // onChange={(event) => setFirstName(event.target.value)}
            autoComplete="firstName"
            InputLabelProps={{ className: 'textfield_label' }}
            sx={{
              color: 'white',
              backgroundColor: 'black',
              border: !(formik.touched.firstName && formik.errors.firstName)
                ? '1px solid #23BE99'
                : '1px solid #FF0000',
              borderRadius: '20px',
              outline: 'none',

              input: {
                color: 'white',
                '&:-webkit-autofill': {
                  WebkitTextFillColor: '#FFF',
                  WebkitBackgroundClip: 'text !important',
                },
              },
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
            id="email"
            label="Email"
            name="email"
            value={formik.values.email}
            autoComplete="email"
            inputProps={{ maxLength: 50 }}
            onFocus={formik.handleBlur}
            onChange={formik.handleChange}
            // onChange={(event) => setEmail(event.target.value)}
            InputLabelProps={{ className: 'textfield_label' }}
            sx={{
              color: 'white',
              backgroundColor: 'black',
              border: !(formik.touched.email && formik.errors.email)
                ? '1px solid #23BE99'
                : '1px solid #FF0000',
              borderRadius: '20px',
              outline: 'none',

              input: {
                color: 'white',
                '&:-webkit-autofill': {
                  WebkitTextFillColor: '#FFF',
                  WebkitBackgroundClip: 'text !important',
                },
              },
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
            label="Lösenord"
            name="password"
            value={formik.values.password}
            onFocus={formik.handleBlur}
            onChange={formik.handleChange}
            // onChange={(event) => setPassword(event.target.value)}
            autoComplete="password"
            InputLabelProps={{ className: 'textfield_label' }}
            sx={{
              color: 'white',
              backgroundColor: 'black',
              border: !(formik.touched.password && formik.errors.password)
                ? '1px solid #23BE99'
                : '1px solid #FF0000',
              borderRadius: '20px',
              outline: 'none',

              input: {
                color: 'white',
                '&:-webkit-autofill': {
                  WebkitTextFillColor: '#FFF',
                  WebkitBackgroundClip: 'text !important',
                },
              },
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
        onClick={() => ({
          firstname: formik.values.firstName,
          lastname: formik.values.LastName,
          email: formik.values.email,
          password: formik.values.password,
        })}
        type="submit"
        fullWidth
        variant="contained"
        className="center"
        disabled={!formik.isValid}
        sx={{
          mt: 3,
          mb: 2,
          width: '250px',
          color: 'white',
          backgroundColor: '#23BE99',
          border: '1px solid #23BE99',
          borderRadius: '20px',
          outline: 'none',
          '&:disabled': {
            color: '#23BE99',
          },
          '@media (max-width: 700px)': {
            width: '100%',
          },
        }}
      >
        Registrera
      </Button>
      {registerError ? (
        <Typography sx={{ color: 'red' }}>{registerError}</Typography>
      ) : null}
    </Box>
  );
}

export default RegisterForm;
