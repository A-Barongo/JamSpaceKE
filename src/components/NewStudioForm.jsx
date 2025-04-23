import React from 'react'
import { useState } from 'react'

function NewStudioForm({studios,setStudios}) {

const[studioName,setStudioName]=useState()
const[studioLocation,setStudioLocation]=useState()
const[instruments,setInstruments]=useState()
const[price,setPrice]=useState()
const[image,setimage]=useState()
const[description,setDescription]=useState()
const[email,setEmail]=useState()
const[tel,setTel]=useState()
const[studioData,setStudioData]=useState()

function

  return (
    <div>
      <form className='newStudioForm'>
        <input type='text' placeholder='Enter Studio Name' name="studioName" value={studioName}/>
        <input type='text' placeholder='Enter Studio Location' name="studioLocation" value={studioLocation}/>
        <input type='text' placeholder='Enter Instruments Available Seperated by a comma' name="instruments" value={instruments}/>
        <input type='number' placeholder='Enter Studio Price Per Hour' name="price" value={price}/>
        <input type='url' placeholder='Enter URL for the studio profile image' name="image" value={image}/>
        <input type='text' placeholder='A word to artists booking with you' name="description" value={description}/>
        <input type='email' placeholder='Enter Email Address' name="price" value={email}/>
        <input type='tel' placeholder='Enter Phone Number' name="price" value={tel}/>
        <input type='submit' name="submit" />
    </form>
  </div>
  )
}

export default NewStudioForm