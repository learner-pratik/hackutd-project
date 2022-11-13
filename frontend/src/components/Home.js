import React, {useState} from 'react';
import Education from './Education';
import Options from './Options';
import Plan from './Plan'
import Prerequisites from './Prerequisites';
import Register from './Register';
import axios from 'axios';
import { drawerClasses } from '@mui/material';

function Home() {
  const [step,setStep] = useState(0);
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [degree, setDegree] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [prereq,setPrereq] = useState([]);
  const [selectedPrereq, setSelectedPrereq] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([])
  const [subs,setSubs]= useState([]);
  const [elSubs,setElSubs] = useState([]);

  const BASE_URL = 'https://e323-129-110-241-55.ngrok.io/'
  
  function populateCourses( selcourses) {

    
    
    const postData = {
      degree: 'cs',
      track: 'traditional',
      pre_req: selcourses,
    }
    axios.post(`${BASE_URL}pre_req_update`, postData)
    .then(response => {
      setCourses(response.data)
     const coresubs = [];
     const electivesubs= [];
     response.data.forEach(dt => {
        if (dt.pre_req.length > 0 ) {

          


         if(dt.core=='yes')
          {
          coresubs.push({
            no: dt.course,
            name: dt.title,
            credit: 3,
            pre_req: true,
            pre_req_no: dt.pre_req[0].course_no,
            pre_req_name: dt.pre_req[0].title,
            pre_req_credit: 3,
          })
        }
        else {
            electivesubs.push({
                no: dt.course,
                name: dt.title,
                credit: 3,
                pre_req: true,
                pre_req_no: dt.pre_req[0].course_no,
                pre_req_name: dt.pre_req[0].title,
                pre_req_credit: 3,
              })

        }

        } else {

         if(dt.core=='yes')
           {
          coresubs.push({ 
            no: dt.course,
            name: dt.title,
            credit: 3,
            pre_req: false,
          })
        }

        else {
            electivesubs.push({ 
                no: dt.course,
                name: dt.title,
                credit: 3,
                pre_req: false,
              })
        }
    }
      });

      setSubs(coresubs);
      setElSubs(electivesubs);



    }) 
    setStep((step+1)%5);
  }

  function populatePrereq(){
    axios.get(`${BASE_URL}pre_req/cs/traditional`)
    .then(response => {
      setPrereq(response.data);
    })
  }

  const onSubmitPrereq=(e)=>{
    console.log(e.selected);
    setSelectedPrereq(e.selected);
    
    populateCourses(e.selected)
  }

  const onSubmitClick=(e)=>{ 
    setName(e.name); 
    setEmail(e.email); 
    setPassword(e.password); 
    setDob(e.dob);
    setStep((step+1)%5);
  }

  const onSubmitEducation=(e)=>{
    setDegree(e.degree)
    setSpecialization(e.specialization)
    populatePrereq();
    //if(prereq.length>0)
    setStep((step+1)%5);
  }

  const onSubmitCourses = (e) => {
    setSelectedCourses(e.selectedCourses)
    console.log(e.selectedCourses);
    setStep((step+1)%5);
  }

  return (
    <React.Fragment>  
      <div className="title fancy-text" > Welcome Future Comet!</div>
      {
        {
          0: <Register onSubmitClick={onSubmitClick}/>,
          1: <Education name={name} onSubmitEducation={onSubmitEducation}/>,
          2: <Prerequisites prereq={prereq} onSubmitPrereq={onSubmitPrereq}/>,
          3: <Options subs={subs} elSubs={elSubs} onSubmitCourses={onSubmitCourses} />,
          4: <Plan selectedCourses={selectedCourses} />
        }[step]
      }
    </React.Fragment>  
  );
}

export default Home;
