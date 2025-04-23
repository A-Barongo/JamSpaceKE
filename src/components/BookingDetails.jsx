import React from 'react'

function BookingDetails({name,startTime,endTime,date,studio,location}) {
  return (
    <div>
      <h4>Artist Name: {name}</h4>
      <h4>Session Studio: {studio}</h4>
      <h4>Studio Location: {location}</h4>
      <h4>Session Date: {date}</h4>
      <h4>Session Start Time: {startTime}</h4>
      <h4>Session End Time: {endTime}</h4>

    </div>
  )
}

export default BookingDetails