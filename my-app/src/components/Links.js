import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home';
import Homepage from './Homepage';
import App from '../App';
import Login from './Login';
import Todolist from './Todolist';
import { useState } from 'react';
export default function Links({ state, updateState }) {
  console.log(state);
  return (
    <div>
      <Routes>
        {/* <Route path="" elements={<Navbar />} /> */}
        <Route path='' elements={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        {state === true ? <Route path="/todolist/" element={<App />} /> : <Route path="/todolist" element={<Login state={state} updateState={updateState} />} />}
        <Route path="/login" element={<Login state={state} updateState={updateState} />} />
      </Routes>
    </div>
  )
}
