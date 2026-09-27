 import React from 'react'
import {Link} from 'react-router-dom'
// link is used for making a single page website not reload the page 
const Navbar = () => {
  return (
    <div className='nav'>
      <h3>Satyam</h3>
      <div>
        <Link to='/'>Home</Link>
        
        <Link to='/about'>about</Link>
        
        <Link to='/contact'>contact</Link>
      </div>
    </div>
  )
}

export default Navbar
