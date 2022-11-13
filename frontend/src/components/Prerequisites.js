import { Button, Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';

const Prerequisites = (props) => {
    const [checked, setChecked] = React.useState([]);
    const prereq = props.prereq
    const tempFunction = () => {
        console.log(checked);
        props.onSubmitPrereq({selected:checked});
    }

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value.course_reference);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value.course_reference);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    return (
      <Grid
        sx={{m:3}}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <React.Fragment>        
            <h4 style={{color: "white"}}> Select List of Completed Prerequisites</h4>
            <List dense sx={{ width: '100%', maxWidth: 360}}>
            {prereq.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value.course_number}`;
              return (
                <ListItem
                  key={value.course_reference}
                  secondaryAction={
                    <Checkbox
                      sx={{color: "grey"}}
                      edge="end"
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value.course_reference) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText sx={{ color: 'white' }} id={labelId} primary={`${value.title}- ${value.course_number}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>
        <Grid item style={{display:"flex"}}  justify="flex-end">
          <Button 
              variant="contained" 
              endIcon={<SendIcon />}
              onClick={(e) =>tempFunction()}>
              Next
          </Button>
        </Grid>
        </React.Fragment>
      </Grid>
  )
}
         
export default Prerequisites