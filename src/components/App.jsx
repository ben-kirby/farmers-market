import React from 'react'
import Navbar from './Navbar'
import DateSelector from './DateSelector'
import Background from './img/veggies.jpg'


function App(){
  const bodyStyle = {
    display: 'flex',
    width: '100%',
    height: '100%'
  }

  const appContent = {
    fontFamily: 'Arial',
    backgroundImage: 'url(' + Background + ')',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    zIndex: '999'
  }

  return (
    <div style={appContent}>
      <div style={bodyStyle}>
        <Navbar/>
      </div>
      <DateSelector/>
    </div>
  )
}

export default App
