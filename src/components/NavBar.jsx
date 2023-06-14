import React from 'react'
import './NavBar.css'
import logo from '../assets/milogo.png'
function NavBar() {
  return (
    <header className="header">
    <div className="containt-header">
    <p className='title-header'>WelcomeCanarias</p>
    <div className="logo-header">
    <img className="logo" alt='logoimg' src={logo}/>
    </div>
    </div>
    </header>
  )
}



export default NavBar