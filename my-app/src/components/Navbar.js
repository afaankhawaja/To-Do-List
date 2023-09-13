import React from 'react'

import { useNavigate } from 'react-router-dom';
import Links from './Links';
import { useState } from 'react';

export default function Navbar() {
  const [state,setState]=useState(false);
  const navigate = useNavigate(); 



  function updateState(ustate){
      setState(ustate);
      }
  return (
    <>
    <div class="navbar" style={{width:'100%'}}>
    <a onClick={()=>navigate("/home") }>Home</a>
   { !state?<a onClick={()=>navigate("/login") }>Login</a>:<a onClick={()=>{setState(false);navigate("/login") }}>Logout</a>} 
    <a  onClick={()=>navigate("/todolist") }>To-Do List</a>
  </div>
<br></br>
<Links state={state} updateState={updateState}/>
03135924708

</>
  )
}
