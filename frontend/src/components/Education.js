import React, { useState} from 'react';
import {Select, MenuItem, FormControl, InputLabel, FormHelperText, Grid} from '@mui/material'
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
            <FormControl required sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-required-label">Degree</InputLabel>
            <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={degree}
                label="Degree *"
                onChange={updateDegree}
            >   
                
            <MenuItem value="">Select Degree</MenuItem>          
            <MenuItem value={degreeOptions[0]}>Computer Science</MenuItem>
            
            </Select>
            <FormHelperText>Required</FormHelperText>
            </FormControl>

            <FormControl required sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-required-label">Specialization</InputLabel>
            <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={specialization}
                label="Specialization *"
                onChange={updateSpecialization}
            >   
                <MenuItem value="">Select Specialization</MenuItem>          
                <MenuItem value={specializationOptions[0]}>Traditional Track</MenuItem>
                <MenuItem value={specializationOptions[1]}>Data Science</MenuItem>
                <MenuItem value={specializationOptions[2]}>Intelligent Systems</MenuItem>
                
            </Select>
            <FormHelperText>Required</FormHelperText>
            </FormControl>
        
            <Grid item style={{display:"flex"}}  justify="flex-end">
                <Button 
                    variant="contained" 
                    endIcon={<SendIcon />}
                    onClick={(e) => props.onSubmitEducation({degree:degree, specialization:specialization})}>
                    Next
                </Button>
            </Grid>
        </React.Fragment>
    )
}

export default Education

