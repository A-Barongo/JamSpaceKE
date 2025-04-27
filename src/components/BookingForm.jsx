import React, { useState } from 'react'


function BookingForm({studioid,studioName,studioLocation,currentUser}) {
  
  const[name,setName]=useState()
  const[tel,setTel]=useState("")
  const[email,setEmail]=useState("")
  const[date,setDate]=useState("")
  const[startTime,setStartTime]=useState("")
  const[endTime,setEndTime]=useState("")
  const[description,setDescription]=useState("")

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
    fetch(`http://localhost:5000/studios/${studioid}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBooking)
    })
    .then(res => res.json())
    .then(()=>{
      setName("")
      setDate("")
      setStartTime("")
      setEndTime("")
      setDescription("")
      setEmail("")
      setTel("")}
    )
    
    const updatedBookings = [...(currentUser.bookings || []), newBooking];

fetch(`http://localhost:5000/users/${currentUser.id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ bookings: updatedBookings })
})

    ///add errors
  }
 
  return (
    <div className="bookingFormContainer">
      <form className="bookingForm" onSubmit={handleSubmit}>
        <input className="bookingInput" type="text" placeholder="Enter Full Name" name="fullname" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="bookingInput" type="tel" placeholder="Enter Phone Number" name="phoneNumber" value={tel} onChange={(e) => setTel(e.target.value)} />
        <input className="bookingInput" type="email" placeholder="Enter Email Address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="bookingInput" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input className="bookingInput" type="time" name="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        <input className="bookingInput" type="time" name="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        <input className="bookingInput" type="text" placeholder="Describe your session goals" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input className="bookingSubmit" type="submit" value="Book Now" />
      </form>
    </div>
  )
}

export default BookingForm