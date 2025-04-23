import React from 'react'
import BookingForm from '../components/BookingForm'
import { useOutletContext } from "react-router-dom"

function FindStudio() {
  return (
    <div>
      <BookingForm/>
    </div>
  )
}

export default FindStudio