import React from 'react'

function Logo(){
  const logo = {
    color: '#DCDCDC',
    marginLeft: '15px',
    textShadow: '0px 0px 8px black',
  }

  return (
    <div style={logo}>
      <h1><em>Avery's Organics</em></h1>
    </div>
  )
}

export default Logo
