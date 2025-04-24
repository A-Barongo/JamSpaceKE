import React, { useState } from 'react'
import BookingForm from './BookingForm'

function StudioCard({image,location,name,instruments,id}) {
  const[selected,setSelect]=useState(false)

  function handleSelect(){
    setSelect(!selected)
  }
    return (
      <div  onClick={handleSelect}>
          <img src={image} alt='Studio Image'/>
          <h3>NAME: {name}</h3>
          <h5>LOCATION: {location}</h5>
          <h5>INSTRUMENTS: {instruments.join(", ")}</h5>
        {selected?<BookingForm studioid={id}/>:null}  
      </div>
    )
  }

export default StudioCard