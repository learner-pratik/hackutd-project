import React, { useState } from 'react'
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
    const [expanded, setExpanded] = useState(false)
    const [preReqRequirement, setPreReqRequirement] = useState(props.preReq)
    const [addedMainCourse, setAddedMainCourse] = useState(false)
    const [addedPreReqCourse, setAddedPreReqCourse] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            sx={{
                m:3, 
                minWidth:200,
                borderRadius: 2,
                borderColor: 'text.primary',
                borderWidth:3,
            }}
        >
            <CardContent className='card' style={{backgroundColor: 'white'}}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Typography
                            variant='h6'
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
                            variant='h6'
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
                            variant='h6'
                            sx={{
                                borderColor: '#130732',
                                borderRadius: 2,
                                color: '#130732'
                            }}
                        >
                            Credits: {props.courseCredits}
                        </Typography>
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={3}>
                        <CardActions>
                            <Button
                                sx={{
                                    color:'#130732',
                                    borderColor:'#130732',
                                }}
                                variant='outlined' 
                                size='medium'
                                disabled={preReqRequirement || addedMainCourse}
                                onClick={() => {
                                    props.setCourseCount(props.courseCount+1)
                                    setAddedMainCourse(true)
                                    props.setSelectedCourses([...props.selectedCourses, {
                                        courseNumber: props.courseNumber,
                                        courseName: props.courseName,
                                    }])
                                }}
                            >
                                Add
                            </Button>
                        </CardActions>
                    </Grid>
                    {
                    preReqRequirement &&  
                    <Grid item xs={4}>
                        <Typography
                            variant='h6'
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
                    {preReqRequirement && <Grid item xs={6}></Grid>}
                    {
                    preReqRequirement && 
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
                <CardContent className='card' style={{backgroundColor: 'white'}}>
                    <Grid sx={{p:1}} container spacing={2}>
                        <Grid item xs={3}>
                            <Typography
                                variant='h6'
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
                                variant='h6'
                                sx={{
                                    borderColor: '#130732',
                                    borderRadius: 2,
                                    color: '#130732',
                                }}
                            >
                                Credits: {props.preReqCourseCredits}
                            </Typography>
                        </Grid>
                        <Grid item xs={5}></Grid>
                        <Grid item xs={3}>
                            <CardActions>
                                <Button
                                    sx={{
                                        color:'#130732',
                                        borderColor:'#130732',
                                    }}
                                    variant='outlined' 
                                    size='medium'
                                    disabled={addedPreReqCourse}
                                    onClick={() => {
                                        props.setCourseCount(props.courseCount+1)
                                        setPreReqRequirement(false)
                                        setAddedPreReqCourse(true)
                                        setExpanded(false)
                                        props.setSelectedCourses([...props.selectedCourses, {
                                            courseNumber: props.courseNumber,
                                            courseName: props.courseName,
                                        }])
                                    }}
                                >
                                    Add
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default CourseCard