import React, { useEffect, useState } from 'react'
import { RxFontRoman } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import'./login.css'




const Login = () => {
  const [alert,setalert] = useState(null)
  const[form,setform]=useState({
    Name:'',
    gmail:'',
    number:'',
    addres:'',
    
});

const showalert =(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
}


const handlesubmit = ()=>{
  setform("");
  console.log('Form submited');
  showalert("Login" ,"succesfully");
};




  return (
    <>
       <div className='lalaal'>
      <div className='fromms'>
       
        <div className='inhin'>
        <label>
          
          <input
          placeholder='Name'
          value={form.Name}
          onChange={e=>{
            setform({
              ...form,
              Name:e.target.value
            })
          }} />
        </label>
        </div>

        <div className='inhin'>
        <label>
         
          <input 
          placeholder='gmail'
          value={form.gmail}
          onChange={e=>{
            setform({
              ...form,
              gmail:e.target.value
              
            })
          }} />
        </label>
        </div>

        <div className='inhin'>
        <label>
        
          <input 
          placeholder='numbar'
          value={form.number}
          required
          min={3}
          max={10}
          onChange={e=>{
            setform({
              ...form,
              number:e.target.value
              
            })
            
          }} />
        </label>
        </div>

        <div className='inhin'>
        <label>
          
          <input 
          placeholder='addres'
          value={form.addres}
          onChange={e=>{
            setform({
              ...form,
              addres:e.target.value
            })
          }} />
        </label>
        </div>

       <Link to="/"> <button onClick={handlesubmit} disabled={!form}  className='btn-ltn'>Submit</button></Link>
       
        </div>

      </div>
    </>
  )
}

export default Login
