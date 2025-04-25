import React from 'react'
import BookingDetails from '../components/BookingDetails'
import { useOutletContext } from "react-router-dom"

function MyBooking() {
  const { currentUser, users, setUsers } = useOutletContext()

  const handleDelete = (bookingId) => {
    const updatedBookings = currentUser.bookings.filter(b => b.id !== bookingId)

    fetch(`http://localhost:5000/users/${currentUser.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bookings: updatedBookings }),
    })
      .then(res => res.json())
      .then(updatedUser => {
        
        const updatedUsers = users.map(user =>
          user.id === updatedUser.id ? updatedUser : user
        )
        setUsers(updatedUsers)
      })
  }

  const handleEdit = (booking) => {
    
  }
    return (
    <div>
      {currentUser.bookings.map((booking)=><BookingDetails booking={booking} onEdit={handleEdit} onDelete={handleDelete}/>)}
    </div>
  )
}

export default MyBooking