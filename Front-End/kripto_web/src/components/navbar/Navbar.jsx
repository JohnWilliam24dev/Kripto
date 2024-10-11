import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  const navigate =useNavigate()
  const click_login= ()=>{
    navigate("/login");
  }
  const click_register=()=>{
    navigate("/register");
  }
  return (
    <nav className='navbar'>
      <div className='button_content'>
      <button className='button_nav' onClick={click_register}>Crie sua Conta</button>
      <button className='button_nav' onClick={click_login}>Login</button>
      </div>
        
        
    </nav>
  )
}

export default Navbar