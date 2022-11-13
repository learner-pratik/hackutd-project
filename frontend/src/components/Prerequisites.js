import { Button, Divider, Grid, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import SendIcon from '@mui/icons-material/Send';

import React from 'react';

const Prerequisites = (props) => {
    const [checked, setChecked] = React.useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);

        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        
        setChecked(newChecked);
    };

    return (
        <React.Fragment>        
            <h4 style={{color: "white"}}> Select List of Completed Prerequisites</h4>
            <List dense sx={{ width: '100%', maxWidth: 360}}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                sx={{color: "grey"}}
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText sx={{ color: 'white' }} id={labelId} primary={`Pre-requiste Class ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    <Grid item style={{display:"flex"}}  justify="flex-end">
                <Button 
                    variant="contained" 
                    endIcon={<SendIcon />}
                    onClick={(e) => props.onSubmitPrereq({checked:checked})}>
                    Next
                </Button>
    </Grid>
        </React.Fragment>
    )
}

                   
export default Prerequisites