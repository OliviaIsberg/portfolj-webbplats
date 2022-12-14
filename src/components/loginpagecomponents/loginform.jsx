import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useContext, useEffect, useState, useRef } from 'react';
import { LogInContext } from '../../LogInContext';
import { Typography } from '@mui/material';

const validationSchema = yup.object({
  password: yup.string().required('Vänligen skriv ditt lösenord').min(5),
  email: yup.string().email().required('Ange en giltig e-post'),
});

function LoginForm(props) {
  const handleClose = props.handleClose;
  const { loginUser } = useContext(LogInContext);
  const [loginError, setLoginError] = useState(null);
  const emailInput = useRef();

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        loginUser(values.email, values.password);
        handleClose();
      } catch (e) {
        setLoginError(e.message);
      }
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            inputRef={emailInput}
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
        Logga in
      </Button>
      {loginError ? (
        <Typography sx={{ color: 'red' }}>{loginError}</Typography>
      ) : null}
    </Box>
  );
}

export default LoginForm;
