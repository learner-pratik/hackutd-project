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
                minWidth:200,
                borderRadius: 2,
                borderColor: 'text.primary',
                borderWidth:3,
            }}
        >
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Typography
                            variant='h5'
                            sx={{
                                borderColor: '#130732',
                                borderRadius: 2,
                                color: '#130732'
                            }}
                        >
                            {props.courseNumber}
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography 
                            variant='h5'
                            sx={{
                                borderColor: '#130732',
                                borderRadius: 2,
                                color: '#130732'
                            }}
                        >
                            {props.courseName}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            variant='h5'
                            sx={{
                                borderColor: '#130732',
                                borderRadius: 2,
                                color: '#130732'
                            }}
                        >
                            Credits: {props.courseCredits}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={2}>
                        <CardActions>
                            <Button
                                sx={{
                                    color:'#130732',
                                    borderColor:'#130732',
                                }}
                                variant='outlined' 
                                size='medium'
                            >
                                Add
                            </Button>
                        </CardActions>
                    </Grid>
                    {
                    props.preReq &&  
                    <Grid item xs={4}>
                        <Typography
                            variant='h5'
                            sx={{
                                borderColor: '#130732',
                                borderRadius: 2,
                                color: '#130732',
                            }}
                        >
                            Pre-Requisite not satisfied
                        </Typography>
                    </Grid>
                    }
                    {props.preReq && <Grid item xs={6}></Grid>}
                    {
                    props.preReq && 
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
                    }
                </Grid>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Grid sx={{p:1}} container spacing={2}>
                    <Grid item xs={3}>
                        <Typography
                            variant='h5'
                            sx={{
                                borderColor: '#130732',
                                borderRadius: 2,
                                color: '#130732',
                            }}
                        >
                            {props.preReqCourseNumber}
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography 
                            variant='h5'
                            sx={{
                                borderColor: '#130732',
                                borderRadius: 2,
                                color: '#130732',
                            }}
                        >
                            {props.preReqCourseName}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            variant='h5'
                            sx={{
                                borderColor: '#130732',
                                borderRadius: 2,
                                color: '#130732',
                            }}
                        >
                            Credits: {props.preReqCourseCredits}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={2}>
                        <CardActions>
                            <Button
                                sx={{
                                    color:'#130732',
                                    borderColor:'#130732',
                                }}
                                variant='outlined' 
                                size='medium'
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