import React from 'react';
import '../../css/form.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('firstName'),
      password: data.get('lastName'),
    });
    alert(member, data.get('firstName'));
  };

  const [member, setMember] = React.useState('');

  const handleChange = (event) => {
    setMember(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          className="contactMember"
          sx={{ color: 'white' }}
        >
          Vad kan vi hjälpa dig med?
        </Typography>
        <FormControl fullWidth>
          <InputLabel
            id="memberSelectLabel"
            sx={{
              color: 'white',
              '&.${inputLabelClasses.shrink}': {
                // set the color of the label when shrinked (usually when the TextField is focused)
                color: 'orange',
              },
            }}
          >
            Member
          </InputLabel>
          <Select
            labelId="memberSelectLabel"
            id="memberSelect"
            value={member}
            label="Member"
            onChange={handleChange}
            sx={{
              color: 'white',
              backgroundColor: 'black',
              border: '1px solid #23BE99',
              borderRadius: '20px',
              outline: 'none',
            }}
          >
            <MenuItem value={'Simon'}>Simon Eriksson</MenuItem>
            <MenuItem value={'Sara'}>Sara Lindqvist</MenuItem>
            <MenuItem value={'Olivia'}>Olivia Isberg</MenuItem>
            <MenuItem value={'Max'}>Max Andersson</MenuItem>
            <MenuItem value={'Anna'}>Anna Özmehak</MenuItem>
            <MenuItem value={'Rossana'}>Rossana Pistone</MenuItem>
          </Select>
        </FormControl>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                InputLabelProps={{ className: 'textfield_label' }}
                sx={{
                  color: 'white!important',
                  backgroundColor: 'black',
                  border: '1px solid #23BE99',
                  borderRadius: '20px',
                  outline: 'none',
                  input: { color: 'white' },
                  '&.focused': {
                    color: 'white',
                  },
                  '&.shrink': {
                    color: 'white',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                InputLabelProps={{ className: 'textfield_label' }}
                sx={{
                  color: 'white',
                  backgroundColor: 'black',
                  border: '1px solid #23BE99',
                  borderRadius: '20px',
                  outline: 'none',
                  input: { color: 'white' },
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
                autoComplete="email"
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
            sx={{
              mt: 3,
              mb: 2,
              width: '300px',
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
            }}
          >
            Contact Member
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Form;
