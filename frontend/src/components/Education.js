import { useState} from 'react';
import {Select, MenuItem, FormControl, InputLabel, FormHelperText, Grid} from '@mui/material'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Education = () => {
    const [degree, setDegree] = useState('')
    const [specialization, setSpecialization] = useState('')

    const updateDegree = (event) => {
        setDegree(event.target.value)
    }

    const updateSpecialization = (event) => {
        setSpecialization(event.target.value)
    }

    const updateNext = () => {
        console.log("next button")
    }

    return (
        <div>
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
            <MenuItem value={10}>Computer Science</MenuItem>
            <MenuItem value={20}>Electrical</MenuItem>
            <MenuItem value={30}>ITM</MenuItem>
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
            <MenuItem value={10}>Traditional Track</MenuItem>
            <MenuItem value={20}>Data Science</MenuItem>
            <MenuItem value={30}>Intelligent Systems</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
        </FormControl>
       
        <Grid item style={{display:"flex"}}  justify="flex-end">
            <Button 
                variant="contained" 
                endIcon={<SendIcon />}
                onClick={() => updateNext()}>
                Next
            </Button>
        </Grid>

        </div>
    )
}

export default Education