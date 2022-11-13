import React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import CourseCard from './CourseCard';

function Options(props) {

  const subs= [
    {
      no:"CS6363",
      name:"Design and Analysis of Algorithms",
      credit:"3",
      pre_req:true,
      pre_req_no:"CS5343",
      pre_req_name:"Algo and DS",
      pre_req_credit:"3"
    },
    {no:"CS6360", name:"Advanced Operating Systems", credit:'3', pre_req:false},
    {
      no:"CS6365",
      name:"Advanced Computer Networks",
      credit:'3',
      pre_req:true,
      pre_req_no:"CS5340",
      pre_req_name:"Computer Networks",
      pre_req_credit:"3"
    },
    {no:"CS6361", name:"Machine Learning", credit:'3', pre_req:false},
    {no:"CS6370", name:"Database Design", credit:'3', pre_req:false},
  ];
  
  return (
    <React.Fragment>
      <div className="sub-title fancy-text" >
        Look at all these options!
      </div>
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
              /> : 
              <CourseCard 
                courseNumber={sub.no}
                courseName={sub.name}
                courseCredits={sub.credit}
                preReq={sub.pre_req}
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
              /> : 
              <CourseCard 
                courseNumber={sub.no}
                courseName={sub.name}
                courseCredits={sub.credit}
                preReq={sub.pre_req}
              />
            )
          }
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Options;




