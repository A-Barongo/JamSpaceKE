import React from 'react'
import BookingForm from '../components/BookingForm'
import { useOutletContext } from "react-router-dom"
import StudioCard from '../components/StudioCard'

function FindStudio() {
  const {studios}=useOutletContext()
  return (
    <div>
      
    </div>
  )
}

export default FindStudio