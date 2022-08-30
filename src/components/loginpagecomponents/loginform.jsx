import React from "react";
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
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5" className="contactMember" sx={{color: "white"}}>
                Vill du registera dig?
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      InputLabelProps={{className: "textfield_label"}}
                      sx={{
                        color: "white",
                        backgroundColor: "black",
                        border: "1px solid #23BE99",
                        borderRadius: "20px",
                        outline: "none",
                        input: { color: 'white' },
                        inputLabel: { color: "white" },
                        textfield_label: { color: 'white' },
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none'
                        }
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
                      autoComplete="password"
                      InputLabelProps={{className: "textfield_label"}}
                      sx={{
                        color: "white",
                        backgroundColor: "black",
                        border: "1px solid #23BE99",
                        borderRadius: "20px",
                        outline: "none",
                        input: { color: 'white' },
                        inputLabel: { color: "white" },
                        textfield_label: { color: 'white' },
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none'
                        }
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="center"
                  sx={{ mt: 3, mb: 2,
                    width: "300px",
                    color: "white",
                    backgroundColor: "#23BE99",
                    border: "1px solid #23BE99",
                    borderRadius: "20px", 
                    outline: "none",
                    input: { color: 'white' },
                    inputLabel: { color: "white" },
                    textfield_label: { color: "white" },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    }
                    
                }}

                >
                  Login
                </Button>
              </Box>
            </Box>
          </Container>
      )
};

export default Form;
