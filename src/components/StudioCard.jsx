import React from 'react'

function StudioCard({image,location,name,instruments}) {
    return (
      <div value={bot} onClick={() => onClick(bot)}>
          <img src={image} alt='Studio Image'/>
          <h3>NAME: {name}</h3>
          <h5>LOCATION: {location}</h5>
          <h5>INSTRUMENTS: {instruments}</h5>
          
      </div>
    )
  }

export default StudioCard