import React, { useState } from 'react'
import Swal from 'sweetalert2'


function BookingForm({studioid,studioName,studioLocation,currentUser,closeForm,studioBookings,editing}) {
  
  const[name,setName]=useState(editing?editing.name:"")
  const[tel,setTel]=useState(editing?editing.tel:"")
  const[email,setEmail]=useState(editing?editing.email:"")
  const[date,setDate]=useState(editing?editing.date:"")
  const[startTime,setStartTime]=useState(editing?editing.startTime:"")
  const[endTime,setEndTime]=useState(editing?editing.endTime:"")
  const[description,setDescription]=useState(editing?editing.description:"")

  function handleNameChange(event){
    setName(event.target.value)
  }
  function handleDateChange(event){
    setDate(event.target.value)
  }
  function handleStartTimeChange(event){
    setStartTime(event.target.value)
  }
  function handleEndTimeChange(event){
    setEndTime(event.target.value)
  }
  
  function handleDescriptionChange(event){
    setDescription(event.target.value)
  }
  function handleEmailChange(event){
    setEmail(event.target.value)
  }
  function handleTelChange(event){
    setTel(event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault()
    const newBooking = {
      name: name,
      date:date,
      startTime:startTime,
      endTime: endTime,
      description: description,
      email: email,
      tel: tel,
      studioName:studioName,
      studioLocation:studioLocation
       
    }
    fetch(`http://localhost:5000/studios/${studioid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bookings: [...(studioBookings || []), newBooking]
      })
    })
    .then(res => res.json())
    .then(()=>{
      const updatedBookings = [...(currentUser.bookings || []), newBooking]
      fetch(`http://localhost:5000/users/${currentUser.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bookings: updatedBookings })
      })

    })
    .then(()=>{
      setName("")
      setDate("")
      setStartTime("")
      setEndTime("")
      setDescription("")
      setEmail("")
      setTel("")
      closeForm ()
    Swal.fire('Submission successful')
    }
    )
    .catch(() => {
      Swal.fire("Booking failed:")
    })
   
  }
 
  return (
    <div className="bookingFormContainer">
      <form className="bookingForm" onSubmit={handleSubmit}>
        <input className="bookingInput" type="text" placeholder="Enter Full Name" name="fullname" value={name} onChange={handleNameChange} />
        <input className="bookingInput" type="tel" placeholder="Enter Phone Number" name="phoneNumber" value={tel} onChange={handleTelChange} />
        <input className="bookingInput" type="email" placeholder="Enter Email Address" name="email" value={email} onChange={handleEmailChange} />
        <input className="bookingInput" type="date" name="date" value={date} onChange={handleDateChange} />
        <input className="bookingInput" type="time" name="startTime" value={startTime} onChange={handleStartTimeChange} />
        <input className="bookingInput" type="time" name="endTime" value={endTime} onChange={handleEndTimeChange} />
        <input className="bookingInput" type="text" placeholder="Describe your session goals" name="description" value={description} onChange={handleDescriptionChange} />
        <input className="bookingSubmit" type="submit" value="Book Now" />
      </form>
    </div>
  )
}

export default BookingForm