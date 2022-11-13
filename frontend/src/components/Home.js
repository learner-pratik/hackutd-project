import React, {useState} from 'react';
import Education from './Education';
import Options from './Options';
import Plan from './Plan'
import Prerequisites from './Prerequisites';
import Register from './Register';
import axios from 'axios';

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

  const BASE_URL = 'https://dc02-129-110-241-55.ngrok.io/'
  
  function populateCourses() {
    const postData = {
      degree: degree,
      track: specialization,
      pre_req: selectedPrereq
    }
    axios.post(`${BASE_URL}pre_req_update`, JSON.stringify(postData))
    .then(response => {
      setCourses(response.data)
    }) 
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
    populateCourses()
  }

  const onSubmitClick=(e)=>{ 
    setName(e.name); 
    setEmail(e.email); 
    setPassword(e.password); 
    setDob(e.dob);
    setStep((step+1)%4);
  }

  const onSubmitEducation=(e)=>{
    setDegree(e.degree)
    setSpecialization(e.specialization)
    populatePrereq();
    if(prereq.length>0)
    setStep((step+1)%3);
  }

  const onSubmitCourses = (e) => {
    setSelectedCourses(e.selectedCourses)
    setStep((step+1)%3);
  }

  return (
    <React.Fragment>  
      <div className="title fancy-text" > Welcome Future Comet!</div>
      {
        {
          0: <Register onSubmitClick={onSubmitClick}/>,
          1: <Education name={name} onSubmitEducation={onSubmitEducation}/>,
          2: <Prerequisites onSubmitPrereq={onSubmitPrereq}/>,
          3: <Options courses={courses} onSubmitCourses={onSubmitCourses} />,
          4: <Plan selectedCourses={selectedCourses} />
        }[step]
      }
    </React.Fragment>  
  );
}

export default Home;
