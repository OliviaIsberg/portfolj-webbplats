import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { createUser } from '../../api';

const validationSchema = yup.object({
  password: yup.string().required('Vänligen skriv ditt lösenord').min(5),
  firstName: yup.string().required('Vänligen skriv ditt lösenord').min(1),
  LastName: yup.string().required('Vänligen skriv ditt lösenord').min(1),
  email: yup.string().email().required('Ange en giltig e-post'),
  // firstName: yup.string().firstName().required().min(1),
  // LastName: yup.string().LastName().required('Ange ett efternamn').min(1),
});

function RegisterForm() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');

  /* const saveNewUser = (user) => 
  createUser(
    formik.values.password,
    formik.values.email,
    formik.values.firstName,
    formik.values.LastName).then((response) => console.log(response) */
  

  

  const handleSend = (event) => {
    event.preventDefault();
    formik.handleSubmit(event);
    // handleSubmit();
    // alert('logged in / registered');
  };

  // const handleSubmit = () => {
  //   setFirstName('');
  //   setLastName('');
  //   setEmail('');
  //   setPassword('');
  // };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      LastName: '',
      password: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let user = {
        email: values.email,
        password: values.password,
        LastName: values.LastName,
        firstName: values.firstName
      }
     /*  setFirstName('');
      setLastName('');
      setEmail('');
      setPassword(''); */
    
    createUser(user)
    console.log(user)
  },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="LastName"
            label="Lastname"
            name="LastName"
            value={formik.values.LastName}
            onFocus={formik.handleBlur}
            onChange={formik.handleChange}
            // onChange={formik.handleChange}
            autoComplete="LastName"
            InputLabelProps={{ className: 'textfield_label' }}
            sx={{
              color: 'white',
              backgroundColor: 'black',
              border: !(formik.touched.LastName && formik.errors.LastName)
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
            label="Firstname"
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
            label="Email Address"
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
            label="Password"
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
        onClick={() =>
          /* saveNewUser */({
            firstname: firstName,
            lastname: LastName,
            email: email,
            password: password,
          })
        }
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
    </Box>
  );
}

export default RegisterForm;
