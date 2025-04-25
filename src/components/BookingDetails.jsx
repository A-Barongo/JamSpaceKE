import React from 'react'

function BookingDetails({booking,onDelete,onEdit}) {
  if (!booking) return <p>No booking details available.</p>
  return (
    <div>
      <h4>Artist Name: {booking.name}</h4>
      <h4>Session Studio: {booking.studioName}</h4>
      <h4>Studio Location: {booking.studioLocation}</h4>
      <h4>Session Date: {booking.date}</h4>
      <h4>Session Start Time: {booking.startTime}</h4>
      <h4>Session End Time: {booking.endTime}</h4>
      
      <button onClick={() => onEdit(booking)}>Edit</button>
      <button onClick={() => onDelete(booking.id)}>Delete</button>
    </div>
  )
}

export default BookingDetails