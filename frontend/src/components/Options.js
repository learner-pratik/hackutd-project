import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/system/Unstable_Grid/Grid';
import CourseCard from './CourseCard';
import SaveIcon from '@mui/icons-material/Save';
import Typography from '@mui/material/Typography';

function Options(props) {

  let subs = [];
  useEffect(() => {
    props.courses.forEach(data => {
      if (data.pre_req.length > 0) {
        subs.append({
          no: data.course,
          name: data.title,
          credit: 3,
          pre_req: true,
          pre_req_no: data.pre_req[0].course_no,
          pre_req_name: data.pre_req[0].title,
          pre_req_credit: 3,
        })
      } else {
        subs.append({
          no: data.course,
          name: data.title,
          credit: 3,
          pre_req: false,
        })
      }
    });
  })

  const [selectedCourses, setSelectedCourses] = useState([])
  const [courseCount, setCourseCount] = useState(0)
  const [creditCount, setCreditCount] = useState(-3)
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      setCreditCount(creditCount+3)
    } else {
      isMounted.current = true
    }
  }, [courseCount])
  
  return (
    <React.Fragment>
      <div className="sub-title fancy-text" >
        Look at all these options!
      </div>
      <Card
        sx={{m:3}}
      >
        <CardContent>
          <Grid 
            container
            alignItems="center"
            justify="center"
            spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h5">
                Course Selected Count : {courseCount}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">
                Credits Count : {creditCount}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Grid container spacing={2}>
        <Grid className="grid" item xs={4}>
          <div className="sub-title fancy-text" >Core Courses</div>
          {
            subs.map(sub =>
              sub.pre_req ? 
              <CourseCard 
                courseNumber={sub.no}
                courseName={sub.name}
                courseCredits={sub.credit}
                preReq={sub.pre_req}
                preReqCourseNumber={sub.pre_req_no}
                preReqCourseName={sub.pre_req_name}
                preReqCourseCredits={sub.pre_req_credit}
                courseCount={courseCount}
                setCourseCount={setCourseCount}
                selectedCourses={selectedCourses}
                setSelectedCourses={setSelectedCourses}
              /> : 
              <CourseCard 
                courseNumber={sub.no}
                courseName={sub.name}
                courseCredits={sub.credit}
                preReq={sub.pre_req}
                courseCount={courseCount}
                setCourseCount={setCourseCount}
                selectedCourses={selectedCourses}
                setSelectedCourses={setSelectedCourses}
              />
            )
          }
        </Grid>
        <Grid className="grid" item xs={4}>
          <div className="sub-title fancy-text" >Elective Courses </div>
          {
            subs.map(sub =>
              sub.pre_req ? 
              <CourseCard 
                courseNumber={sub.no}
                courseName={sub.name}
                courseCredits={sub.credit}
                preReq={sub.pre_req}
                preReqCourseNumber={sub.pre_req_no}
                preReqCourseName={sub.pre_req_name}
                preReqCourseCredits={sub.pre_req_credit}
                courseCount={courseCount}
                setCourseCount={setCourseCount}
                selectedCourses={selectedCourses}
                setSelectedCourses={setSelectedCourses}
              /> : 
              <CourseCard 
                courseNumber={sub.no}
                courseName={sub.name}
                courseCredits={sub.credit}
                preReq={sub.pre_req}
                courseCount={courseCount}
                setCourseCount={setCourseCount}
                selectedCourses={selectedCourses}
                setSelectedCourses={setSelectedCourses}
              />
            )
          }
        </Grid>
      </Grid>
      <Grid
        sx={{m:3}}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Button
          color="secondary"
          size="large"
          startIcon={<SaveIcon />}
          variant="contained"
          disabled={courseCount !== 11 ? true : false}
          onClick={(e) => props.onSubmitCourses(selectedCourses)}
        >
          Save
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default Options;




