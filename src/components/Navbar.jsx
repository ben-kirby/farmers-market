import React from 'react'
import Logo from './Logo'


function Navbar(){
  const styledNavbar = {
    display: 'flex',
    width: '100%',
    height: '100px',
    alignItems: 'center'
  }

  return(
    <div style={styledNavbar}>
      <Logo/>
    </div>
  )
}

export default Navbar
