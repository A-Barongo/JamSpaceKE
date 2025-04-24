import React, { useState } from 'react'

function BookingForm({studioid}) {
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
       
    }
    fetch(`http://localhost:3000/studios/${studioid}/bookings`, {
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
  
    ///add errors
  }
 
  return (
    <div>
      <form className='bookingForm' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter FullName' name="fullname" value={name} onChange={handleNameChange}/>
        <input type='tel' placeholder='Enter Phone Number' name="phoneNumber" value={tel} onChange={handleTelChange}/>
        <input type='email' placeholder='Enter Email Address' name="email" value={email} onChange={handleEmailChange}/>
        <input type='date' placeholder='Pick a date' name="date" value={date} onChange={handleDateChange}/>
        <input type='time' placeholder='Start time' name="startTime" value={startTime} onChange={handleStartTimeChange}/>
        <input type='time' placeholder='End time' name="endTime" value={endTime} onChange={handleEndTimeChange} />
        <input type='text' placeholder='Describe what you want out of the session' name="description" value={description} onChange={handleDescriptionChange}/>
        <input type='submit' name="submit" />

      </form>
    </div>
  )
}

export default BookingForm