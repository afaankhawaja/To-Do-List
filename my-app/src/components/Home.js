import React from 'react'
import App from '../App'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Login from './Login'
import Homepage from './Homepage'
import Todolist from './Todolist'

export default function Home() {
// const user = props.userLogin;
// console.log(props.userLogin);
// console.log(user);\
let user=false;
  return (
    <div>
        
            {/* <Route path="" elements={<Navbar />} /> */}
            {/* <Route path='' elements={<Homepage />} />
            <Route path="/home" element={<Homepage />} /> */}
            {/* {!user?<><Login/>
            </>:<Todolist></Todolist>} */}
         
    </div>
  )
}
