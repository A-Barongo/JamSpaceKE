import React from 'react'
import BookingDetails from '../components/BookingDetails'
import BookingForm from '../components/BookingForm'
import { useState } from 'react'
import { useOutletContext } from "react-router-dom"
import Swal from 'sweetalert2'

function MyBooking() {
 
  const { currentUser, users, setUsers,studios } = useOutletContext()
  const [editing, setEditing] = useState(null)

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
        Swal.fire({
          title: "Booking succefully deleted",
          icon: "success",
          
        })
        
      })
  }

  const handleEdit = (booking) => {
    setEditing(booking)
  }
  const closeForm = () => {
    setEditing(null)
  }
    return (
      <div>
        <h2>MY Studio Session Bookings</h2>
      {editing ? (
        <BookingForm 
        editing={editing} 
          currentUser={currentUser} 
          closeForm={closeForm}
        />
      ) : ( 
        currentUser.bookings.map((booking) => (
          <BookingDetails 
            key={booking.id} 
            booking={booking} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        ))
      )}
    </div>
  )
}

export default MyBooking