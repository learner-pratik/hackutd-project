import React from 'react';
import {useEffect, useState} from 'react';
import CourseCard from './CourseCard';
import Education from './Education';
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
   
function populatePrereq(){
    axios.get(`https://cb42-129-110-241-55.ngrok.io/pre_req/cs/traditional`)
    .then(response => {
  
   
    setPrereq(response.data);

  
    })
  }  

const onSubmitPrereq=(e)=>{
  console.log(e.selected);
  setSelectedPrereq(e.selected);
}

  const onSubmitClick=(e)=>{ 
    setName(e.name); 
    setEmail(e.email); 
    setPassword(e.password); 
    setDob(e.dob);
    setStep((step+1)%3);
  }

  const onSubmitEducation=(e)=>{
    setDegree(e.degree)
    setSpecialization(e.specialization)
    populatePrereq();
    if(prereq.length>0)
    setStep((step+1)%3);
  }

  return (
  <React.Fragment>  
  <div className="title fancy-text" > Welcome Future Comet!</div>
  {step===0 ? <Register onSubmitClick={onSubmitClick}/>: 
   step===1 ? <Education name={name} onSubmitEducation={onSubmitEducation}/> : <Prerequisites prereq={prereq} onSubmit ={onSubmitPrereq} />}
 

  </React.Fragment>  

  );
}

export default Home;
