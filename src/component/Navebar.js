import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './component.css';

export default function Navebar() {
    const [bgcolor, setbgcolor]=useState('dark')
    document.body.className=(bgcolor)
    const click=()=>{
        setbgcolor(bgcolor==='light'?'dark':'light')
    }


  return (
    <div className='navbar'>
        <h2>Mudassir</h2>
        <div className='nav-div'>
            <Link className='nav-link' to={'/'}>home</Link>
            <Link className='nav-link' to={'/about'}>About</Link>
            <Link className='nav-link' to={'/project'}>Projects</Link>
            <Link className='nav-link' to={'/resume'}>Resume</Link>

           
        </div>
        <button className={`nav-btn ${bgcolor==='light'?'dark':'light'}`} onClick={click}> {bgcolor==='light'?'dark':'light'}</button>

    </div>
  )
}
