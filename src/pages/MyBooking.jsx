import React from 'react'
import BookingDetails from '../components/BookingDetails'
import { useOutletContext } from "react-router-dom"

function MyBooking() {
  return (
    <div>
      <BookingDetails/>
    </div>
  )
}

export default MyBooking