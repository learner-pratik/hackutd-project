import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// same line

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

function CourseCard(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            style={{backgroundColor: 'white'}}
            sx={{
                m:3, 
                minWidth:500,
                borderRadius: 2,
                borderColor: 'text.primary',
                borderWidth:3,
            }}
        >
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography
                            variant='h5'
                            sx={{
                                borderColor: 'text.primary',
                                borderRadius: 2,
                                boxShadow: 1,
                                fontWeight: 'bold'
                            }}
                        >
                            {props.courseNumber}
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography 
                            variant='h5'
                            sx={{
                                borderColor: 'text.primary',
                                borderRadius: 2,
                                boxShadow: 1,
                                fontWeight: 'bold'
                            }}
                        >
                            {props.courseName}
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography
                            variant='h5'
                            sx={{
                                borderColor: 'text.primary',
                                borderRadius: 2,
                                boxShadow: 1,
                                fontWeight: 'bold'
                            }}
                        >
                            Credits: {props.courseCredits}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <CardActions>
                            <Button
                                variant='contained' 
                                size='large'
                            >
                                Add
                            </Button>
                        </CardActions>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography
                            variant='h5'
                            sx={{
                                borderColor: 'text.primary',
                                borderRadius: 2,
                                boxShadow: 1,
                                fontWeight: 'bold'
                            }}
                        >
                            Pre-Requisite not satisfied
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <CardActions>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                    </Grid>
                </Grid>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography
                            variant='h5'
                            sx={{
                                borderColor: 'text.primary',
                                borderRadius: 2,
                                boxShadow: 1,
                                fontWeight: 'bold'
                            }}
                        >
                            {props.courseNumber}
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography 
                            variant='h5'
                            sx={{
                                borderColor: 'text.primary',
                                borderRadius: 2,
                                boxShadow: 1,
                                fontWeight: 'bold'
                            }}
                        >
                            {props.courseName}
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography
                            variant='h5'
                            sx={{
                                borderColor: 'text.primary',
                                borderRadius: 2,
                                boxShadow: 1,
                                fontWeight: 'bold'
                            }}
                        >
                            Credits: {props.courseCredits}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <CardActions>
                            <Button
                                variant='contained' 
                                size='large'
                            >
                                Add
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </Collapse>
        </Card>
    )
}

export default CourseCard