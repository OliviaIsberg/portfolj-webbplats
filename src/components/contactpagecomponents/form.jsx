import React from 'react';
import '../../css/form.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Modal } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  member: yup.string().required('Välj en kontaktperson'),
  firstName: yup.string().required('Ange ditt förnamn').min(2),
  lastName: yup.string().required('Ange ditt efternamn').min(2),
  email: yup
    .string()
    .email('Ange en giltig e-post')
    .required('Ange en giltig e-post'),
  message: yup.string().required('Skriv ett meddellande!').min(4),
});


function Form(props) {

  const [confirmation, setConfirmation] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [member, setMember] = React.useState(
    props.name ? props.name.toLowerCase() : ''
  );

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    formik.handleSubmit();

    emailjs
      .sendForm(
        'service_uysopf7',
        'template_wcn8izn',
        form.current,
        'ESM9l92_E5OXcIWNP'
      )
      .then(
        (result) => {
          handleSubmit();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = () => {
    setConfirmation(true);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setMember('');
  };

  const handleClose = () => setConfirmation(false);

  const handleChange = (event) => {
    setMember(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      member: '',
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container component="main" maxWidth="xs" sx={{ marginBottom: '8.5rem' }}>
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
        <Box
          name="formBox"
          component="form"
          ref={form}
          onSubmit={sendEmail}
          sx={{
            mt: 3,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
            <InputLabel
            id="memberSelectLabel"
            name="MemberSelectLabel"
            type="text"
            fullWidth
            sx={{
              color: 'white',
            }}
          >
            Member
          </InputLabel>
          <Select
            required
            fullWidth
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
            <MenuItem value={'simon'}>Simon Eriksson</MenuItem>
            <MenuItem value={'sara'}>Sara Lindqvist</MenuItem>
            <MenuItem value={'olivia'}>Olivia Isberg</MenuItem>
            <MenuItem value={'max'}>Max Andersson</MenuItem>
            <MenuItem value={'anna'}>Anna Özmehak</MenuItem>
            <MenuItem value={'rosanna'}>Rosanna Pistone</MenuItem>
          </Select>
          </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                type="text"
                name="user_name"
                required
                fullWidth
                id="firstName"
                label="First Name"
                inputProps={{maxLength: 50}}
                autoFocus
                onChange={(event) => setFirstName(event.target.value)}
                value={firstName}
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
                type="text"
                name="user_name"
                id="lastName"
                label="Last Name"
                inputProps={{maxLength: 50}}
                autoComplete="family-name"
                onChange={(event) => setLastName(event.target.value)}
                value={lastName}
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
                type="email"
                name="user_email"
                label="Email Address"
                inputProps={{maxLength: 50}}
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
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
                id="message"
                label="Message"
                name="message"
                autoComplete="message.."
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                InputLabelProps={{ className: 'textfield_label' }}
                multiline
                rows={4}
                inputProps={{ style: { color: 'white' }, maxLength: 1000  }}
                sx={{
                  color: 'white!important',
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
            value="Send"
            variant="contained"
            className="white"
            sx={{
              mt: 3,
              mb: 2,
              width: '300px',
              color: 'white',
              backgroundColor: '#23BE99',
              border: '1px solid #23BE99',
              borderRadius: '20px',
              outline: 'none',
              input: { color: 'white!important' },
              inputLabel: { color: 'white' },
              textfield_label: { color: 'white' },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
          >
            Contact Member
          </Button>
          {confirmation && (
            <Modal
              sx={{ backdropFilter: 'blur(3px)' }}
              open={confirmation}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="confirmationMessage">
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{ fontSize: '30px', color: '#fff' }}
                >
                  Bekräftelse
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2, fontSize: '20px', color: '#fff' }}
                >
                  Ditt email har nu skickats iväg. Vi återkommer så snart vi
                  kan.
                </Typography>
              </div>
            </Modal>
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default Form;
