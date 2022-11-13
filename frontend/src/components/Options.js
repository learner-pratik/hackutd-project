import React from 'react';
import {useEffect, useState} from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );





function Options(props) {

    const subs= [{name:"DAA"},{name:"AOS"},{name:"ACN"},{name:"ALGO"},{name:"Compiler"}];
  return (
  <React.Fragment>
  <div className="sub-title fancy-text" >Look at all these options! </div>
  <Grid container spacing={2}>
  <Grid className="grid" item xs={3}>
  <div className="sub-title fancy-text" >Core Courses </div>
  {
                subs.map(subject =>
                 
                    <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                       {subject.name}
                      </Typography>
                      <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                      </Typography>
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                )
 }
  


  </Grid>
 
  <Grid className="grid" item xs={3}>
  <div className="sub-title fancy-text" >Elective Courses </div>
  {
                subs.map(subject =>
                 
                    <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                       {subject.name}
                      </Typography>
                      <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                      </Typography>
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                )
 }
  </Grid>
  
  
</Grid>
  
  
    </React.Fragment>
  );
}

export default Options;




