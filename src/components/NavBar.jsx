import React from 'react'
import './NavBar.css'
import logo from '../assets/logocanarias.png'
function NavBar() {
  return (
    <header className="header">
    <div className="containt-header">
    <p className='title-header'>WelcomeCanarias</p>
    <img className="logo-header" src={logo}/>
    </div>
    </header>
  )
}



export default NavBar