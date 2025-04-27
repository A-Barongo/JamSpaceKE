import React, { useState } from 'react'
import BookingForm from './BookingForm'

function StudioCard({image,location,name,instruments,id,currentUser}) {
  const[selected,setSelect]=useState(false)

  function handleSelect(){
    setSelect(!selected)
  }
  function stopClick(event) {
    event.stopPropagation()
  }
    return (
      <div className="studioCard" onClick={handleSelect}>
      <img src={image} alt="Studio" className="studioImage" />
      <h3 className="studioName">Name: {name}</h3>
      <h5 className="studioLocation">Location: {location}</h5>
      <h5 className="studioInstruments">Instruments: {instruments.join(", ")}</h5>
      {selected ? (
        <div onClick={stopClick}>
          <BookingForm 
            studioid={id} 
            studioName={name} 
            studioLocation={location} 
            currentUser={currentUser} 
          />
        </div>
      ) : null}      </div>
    )
  }

export default StudioCard