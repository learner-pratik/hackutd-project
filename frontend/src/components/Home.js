import React from 'react';
import {useEffect, useState} from 'react';
import CourseCard from './CourseCard';
import Education from './Education';
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
    setStep((step+1)%3);
  }

  return (
  <React.Fragment>  
  <div className="title fancy-text" > Welcome Future Comet!</div>
  {step===0 ? <Register onSubmitClick={onSubmitClick}/>: 
   step===1 ? <Education name={name} onSubmitEducation={onSubmitEducation}/> : <Prerequisites />}
 

  </React.Fragment>  

  );
}

export default Home;
