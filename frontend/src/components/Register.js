import React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


function Register(props) {

const [name,setName]= useState('');
const [dob,setDob]= useState('');
const [email,setEmail]= useState('');
const [password,setPassword]= useState('');
  return (
  <React.Fragment>
  <div className="sub-title fancy-text" > First,the basics</div>
  
  <Box className="test1"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
        
      <TextField onChange={(e)=>setName(e.target.value)}  sx={{ input: {color: 'white'} }} id="outlined-basic" label="Name" variant="outlined"  />
      <TextField onChange={(e)=>setDob(e.target.value)} sx={{ input: {color: 'white'} }} id="outlined-basic" label="DOB" variant="outlined"  />
      <TextField onChange={(e)=>setEmail(e.target.value)} sx={{ input: {color: 'white'} }} id="outlined-basic" label="Email" variant="outlined"  />
      <TextField type="password" onChange={(e)=>setPassword(e.target.value)}  sx={{ input: {color: 'white'} }} id="outlined-basic" label="Password" variant="outlined"  />
      <Button onClick={(e)=>props.onSubmitClick({name:name, dob:dob, email:email, password:password})} variant="outlined" color="success">Submit</Button>
    </Box> 
    </React.Fragment>
  );
}

export default Register;




