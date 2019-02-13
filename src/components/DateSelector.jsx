import React from 'react'
import Schedule from './Schedule'
import Produce from './Produce'


class DateSelector extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      day: 0,
      month: 0
    }
    this.handleDate = this.handleDate.bind(this)
  }


  handleDate(date){
    this.setState({
      day: new Date(date.target.value).getDay(),
      month: new Date(date.target.value).getMonth()
    })
  }

  render(){
    const dateBox = {
      display: 'flex',
      justifyContent: 'flex-end',
      margin: '-67px 25px 0px 0px',
      alignItems: 'center',
    }

    const dateBoxInterior = {
      padding: '10px',
      border: 'none',
      borderRadius: '.25rem'
    }

    const dateContent = {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '50px',
      marginBottom: '500px'

    }

    const scheduleContent = {
      display: 'flex',
      border: '0px solid black',
      borderRadius: '.25rem',
      backgroundColor: 'rgba(255, 255, 255, 0.55)',
      padding: '10px'
    }

    const produceContent = {
      display: 'flex',
      border: '0px solid black',
      borderRadius: '.25rem',
      backgroundColor: 'rgba(255, 255, 255, 0.55)',
      padding: '10px'
    }

    const dateBoxLabel = {
      marginRight: '5px'
    }

    return(
      <div>
        <div style={dateBox}>
          <label style={dateBoxLabel}><em>Enter a date:</em></label>
          <input
            style={dateBoxInterior}
            type="date"
            name="dateBox"
            onChange={this.handleDate}
          />
        </div>
        <div style={dateContent}>
          <div style={scheduleContent}>
            <Schedule day={this.state.day} />
          </div>
          <div style={produceContent}>
            <Produce month={this.state.month}/>
          </div>
        </div>
      </div>
    )
  }
}

export default DateSelector
