import React from 'react'

function BookingForm() {
  return (
    <div>
      <form className='bookingForm'>
        <input type='text' placeholder='Enter FullName' name="fullname" value={}/>
        <input type='tel' placeholder='Enter Phone Number' name="phoneNumber" value={}/>
        <input type='email' placeholder='Enter Email Address' name="email" value={}/>
        <input type='date' placeholder='Pick a date' name="date" value={}/>
        <input type='time' placeholder='Start time' name="startTime" value={}/>
        <input type='time' placeholder='End time' name="endTime" value={}/>
        <input type='text' placeholder='Describe what you want out of the session' name="description" value={}/>
        <input type='submit' name="submit" />

      </form>
    </div>
  )
}

export default BookingForm