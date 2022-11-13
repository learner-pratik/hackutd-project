import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Register(props) {
  const [name,setName]= useState('');
  const [dob,setDob]= useState('');
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <div className="sub-title fancy-text" > First,the basics</div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > 
        <Box className="test1"
          component="form"
          sx={{
            '& > :not(style)': { p: 1 }
          }}
          noValidate
          autoComplete="off"
        >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField 
              onChange={(e)=>setName(e.target.value)}  
              sx={{ input: {color: 'white'} }} 
              id="outlined-basic" 
              label="Name" 
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              onChange={(e)=>setDob(e.target.value)} 
              sx={{ input: {color: 'white'} }} 
              id="outlined-basic" 
              label="DOB" 
              variant="outlined"  
              fullWidth
              required
              />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              onChange={(e)=>setEmail(e.target.value)} 
              sx={{ input: {color: 'white'} }} 
              id="outlined-basic" 
              label="Email" 
              variant="outlined" 
              fullWidth
              required />
          </Grid>  
          <Grid item xs={12}>
            <TextField 
              type="password" 
              onChange={(e)=>setPassword(e.target.value)}  
              sx={{ input: {color: 'white'} }} 
              id="outlined-basic" 
              label="Password" 
              variant="outlined" 
              fullWidth
              required 
            />
          </Grid>
        </Grid>
      <Button 
        onClick={(e)=>props.onSubmitClick({name:name, dob:dob, email:email, password:password})} 
        variant="contained" 
        fullWidth
        sx={{ mt: 3, mb: 2 }}
      >
        Submit
      </Button>
      </Box>
    </Box> 
    </Container>
    </ThemeProvider>
  );
}

export default Register;




