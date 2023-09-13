import React, { useState,useEffect } from 'react'
import Home from './Home';
import App from '../App';
import { Routes, useNavigate,Route } from 'react-router-dom'
import Todolist from './Todolist';
export default function Login({state,updateState}) {
    // let [userLogin,setUserLogin]=useState(false);
    console.log(state);
    const navigate = useNavigate(); 
   
//   const routeChange = () =>{ 
//     let path = `newPath`; 
//     navigate(path);
//   }
//    useEffect(()=>{
//         if(userLogin === false ) {
//             return navigate("/")
//         }
//     })
// props=props.props;
const handleform = (event) =>{
event.preventDefault();
updateState(true);
// setUserLogin(true);
navigate("/todolist");

    }
const [name,setName]=useState();
const [pass,setPass]=useState();
const loginAgain=()=>{
  alert('try again invaid credentials');
  navigate("/login")
}
return (
    <div style={{backgroundColor:'white',height:590}}>
        <form style={{width:'30%',paddingBlock:40,paddingLeft:50}} onSubmit={(name==='afaan' && pass==='12345')?handleform:loginAgain} >  
        <div class="container"> 
        <br></br>
        <br></br>
        <br></br>  
            <strong style={{paddingRight:10}}>Username: </strong>   
            <input style={{paddingLeft:10}} type="text" placeholder="Enter Username" name="username" required onChange={(e)=>{setName(e.target.value)}}/>  
           <br></br>
           <br></br>
            <strong style={{paddingRight:14}}>Password: </strong>   
            <input style={{paddingLeft:10}} type="password" placeholder="Enter Password" name="password" required onChange={(e)=>{setPass(e.target.value)}}/>  
            <br></br>
            <br></br>
           <div style={{paddingLeft:93}}> <button style={{width:70,height:40,paddingBottom:10,paddingTop:10}} type="submit" >Login</button></div>
            </div>
        </form>
        {state===true?<div>sucess login</div>:<></>}
       {/* <Routes> <Route path="/todolist" element={<App/>}/></Routes> */}
       {/* {login===true?alert("try again"):<></>} */}
    </div>
    
  )
}
