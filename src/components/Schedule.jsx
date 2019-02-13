import React from 'react'
import PropTypes from 'prop-types'


const marketSchedule = [
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Friday',
    location: '---',
    hours: 'Closed',
    booth: '---'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  },
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  }
]

function Schedule(props){
  return(
    <div >
      <h1>{marketSchedule[props.day].day}</h1>
      <h4>Location: {marketSchedule[props.day].location} - booth {marketSchedule[props.day].booth}</h4>
      <h3>{marketSchedule[props.day].hours}</h3>
    </div>
  )
}

Schedule.propTypes = {
  day: PropTypes.number
}

export default Schedule
