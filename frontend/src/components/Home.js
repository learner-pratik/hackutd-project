import React from 'react';
import {useEffect, useState} from 'react';
import CourseCard from './CourseCard';
import Education from './Education';
import Options from './Options';
import Prerequisites from './Prerequisites';
import Register from './Register';

function Home() {
  const [step,setStep] = useState(0);
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [degree, setDegree] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [checked, setChecked] = useState([]);

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
    setStep((step+1)%4);
  }

  const onSubmitPrereq=(e) => {
    setChecked(e.checked)
    setStep((step+1)%4);
    console.log("Inside home == ", e.checked)
  }

  return (
  <React.Fragment>  
  <div className="title fancy-text" > Welcome Future Comet!</div>
  {step===0 ? <Register onSubmitClick={onSubmitClick}/>: 
   step===1 ? <Education name={name} onSubmitEducation={onSubmitEducation}/> : 
   step=== 2 ? <Prerequisites onSubmitPrereq={onSubmitPrereq}/> : <Options />}
 
  </React.Fragment>  

  );
}

export default Home;
