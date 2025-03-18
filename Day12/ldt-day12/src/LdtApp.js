import React, { useState } from 'react'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import LdtHome from './conponents/LdtHome'
import LdtAbout from './conponents/LdtAbout'
import LdtContact from './conponents/LdtContact'
import LdtListUser from './conponents/LdtListUser'
import LdtFormUser from './conponents/LdtFormUser'
import LdtNavNar from './conponents/LdtNavNar'
import './App.css';

export default function LdtApp() {

  const listUsers =   [
    {id:"SV001", LdtFullname:"Lâm Đức Tài", LdtUsername:"KhanChinTuoi", LdtPass:"vjpvjp"},
    {id:"SV002", LdtFullname:"Nguyen Van Khan", LdtUsername:"Khan9Tuoi", LdtPass:"vjpvjp1"},
    {id:"SV003", LdtFullname:"Nguyen Van Kha", LdtUsername:"KhanNineTuoi", LdtPass:"vjpvjp2"}
  ]


  const[LdtUsers, setLdtUsers] = useState(listUsers)
  return (
    <div className='container border my-3'>
      <h1>React Router Dom - Demo - Lâm Đức Tài - K23CNT3</h1>
      <hr/>
      <Router>
        <LdtNavNar/>
        <Routes>
          <Route path='/' element = {<LdtHome/>}/>
          <Route path='/about' element = {<LdtAbout/>}/>
          <Route path='/contact' element = {<LdtContact/>}/>
          <Route path='/list-user' element = {<LdtListUser renderLdtUsers={LdtUsers}/>}/>
          <Route path='/create-user' element = {<LdtFormUser />}/>
        </Routes>
      </Router>
    </div>
  )
}