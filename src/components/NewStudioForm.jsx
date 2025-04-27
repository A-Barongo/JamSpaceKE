import React from 'react'
import { useState } from 'react'

function NewStudioForm({studios,setStudios}) {

const[studioName,setStudioName]=useState("")
const[studioLocation,setStudioLocation]=useState("")
const[instruments,setInstruments]=useState("")
const[price,setPrice]=useState("")
const[image,setImage]=useState(" ")
const[description,setDescription]=useState("")
const[email,setEmail]=useState("")
const[tel,setTel]=useState("")


function handleNameChange(event){
  setStudioName(event.target.value)
}
function handleLocationChange(event){
  setStudioLocation(event.target.value)
}
function handleInstrumentsChange(event){
  setInstruments(event.target.value)
}
function handlePriceChange(event){
  setPrice(event.target.value)
}
function handleImageChange(event){
  setImage(event.target.value)
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
  const newStudio = {
    name: studioName,
    location: studioLocation,
    instruments: instruments.split(",").map(instr => instr.trim()), 
    price: parseFloat(price),
    image: image,
    description: description,
    email: email,
    tel: tel,
    //timeSlots: [] 
  }
  fetch('http://localhost:5000/studios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newStudio)
  })
  .then(res => res.json())
  .then(setStudios([...studios,newStudio]))
  .then(()=>{
        setStudioName("")
    setStudioLocation("")
    setInstruments("")
    setPrice("")
    setImage("")
    setDescription("")
    setEmail("")
    setTel("")}
  )

  ///add errors
}

  return (
    <div className='newStudioFormContainer'>
      <h2>ENTER YOUR STUDIO DETAILS</h2>
      <form className='newStudioForm'  onSubmit={handleSubmit}>
        <input type='text' className='newStudioInput' placeholder='Enter Studio Name' name="studioName" value={studioName} onChange={handleNameChange}/>
        <input type='text' className='newStudioInput' placeholder='Enter Studio Location' name="studioLocation" value={studioLocation}onChange={handleLocationChange}/>
        <input type='text' className='newStudioInput' placeholder='Enter Instruments Available Seperated by a comma' name="instruments" value={instruments} onChange={handleInstrumentsChange}/>
        <input type='number' className='newStudioInput' placeholder='Enter Studio Price Per Hour' name="price" value={price} onChange={handlePriceChange}/>
        <input type='url' className='newStudioInput' placeholder='Enter URL for the studio profile image' name="image" value={image} onChange={handleImageChange}/>
        <input type='text' className='newStudioInput' placeholder='A word to artists booking with you' name="description" value={description} onChange={handleDescriptionChange}/>
        <input type='email' className='newStudioInput' placeholder='Enter Email Address' name="email" value={email} onChange={handleEmailChange}/>
        <input type='tel' className='newStudioInput' placeholder='Enter Phone Number' name="tel" value={tel} onChange={handleTelChange}/>
        <input type='submit' className='newStudioSubmit' name="submit" />
    </form>
  </div>
  )
}

export default NewStudioForm