import React, { useState} from 'react';
import {Select, MenuItem, FormControl, InputLabel, FormHelperText, Grid, Container, Box} from '@mui/material'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Education(props) {
    const [degree, setDegree] = useState('')
    const [specialization, setSpecialization] = useState('')
    
    // dummy degree data
    const degreeOptions = ['Computer Science', 'Electrical', 'ITM']

    // dummy specialization data
    const specializationOptions = ['Traditional Track', 'Data Science', 'Intelligent Systems']

    const updateDegree = (event) => {
        setDegree(event.target.value)
    }

    const updateSpecialization = (event) => {
        setSpecialization(event.target.value)
    }

    return (
        <React.Fragment>
            <div className="sub-title fancy-text" >Hey {props.name}, Tell us your plans! </div>
            <Container component="main" maxWidth="sm">
                <Box 
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>

                </Box>
            <FormControl required sx={{ m: 3, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-required-label">Degree</InputLabel>
                <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={degree}
                    label="Degree *"
                    onChange={updateDegree}
                    className="dropdwn"
                >   
                <MenuItem value="">Select Degree</MenuItem>          
                <MenuItem value={degreeOptions[0]}>Computer Science</MenuItem>
                </Select>
            <FormHelperText sx={{color:"white"}}>*Required</FormHelperText>
            </FormControl>

            <FormControl variant="outlined" required sx={{ m: 3, minWidth: 200}}>
            <InputLabel id="demo-simple-select-required-label">Specialization</InputLabel>
            
                <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    className="dropdwn"
                    value={specialization}
                    label="Specialization *"
                    onChange={updateSpecialization}
                >   
                    <MenuItem value="">Select Specialization</MenuItem>          
                    <MenuItem value={specializationOptions[0]}>Traditional Track</MenuItem>
                    <MenuItem value={specializationOptions[1]}>Data Science</MenuItem>
                    <MenuItem value={specializationOptions[2]}>Intelligent Systems</MenuItem>
                </Select>

            <FormHelperText sx={{color:"white"}}>*Required</FormHelperText>
            </FormControl>

            <Grid
                item 
                style={{display:"flex"}} 
                alignItems="center" 
                justifyContent="center" 
                sx={{m:3}}
            >
                <Button 
                    variant="contained" 
                    endIcon={<SendIcon />}
                    sx={{minWidth:150}}
                    
                    onClick={(e) => props.onSubmitEducation({degree:degree, specialization:specialization})}>
                    Next
                </Button>
            </Grid>
            
            </Container>
        </React.Fragment>
    )
}

export default Education

