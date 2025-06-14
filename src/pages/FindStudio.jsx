import React, { useState } from 'react'
import { useOutletContext } from "react-router-dom"
import StudioCard from '../components/StudioCard'

function FindStudio() {
  const { studios,currentUser } = useOutletContext()

  const [location, setLocation] = useState("")
  const [selectedInstruments, setSelectedInstruments] = useState({
    acousticGuitar: false,
    electricGuitar: false,
    bassGuitar: false,
    keyboard: false,
    drumSet: false,
    trumpet: false,
    saxophone: false,
    violin: false,
    cello: false,
  })

  function handleLocationChange(event) {
    setLocation(event.target.value)
  }

  function handleInstrumentChange(event) {
    const { id, checked } = event.target
    setSelectedInstruments(prevState => ({
      ...prevState,
      [id]: checked
    }))
  }

  const selectedInstrumentList = Object.keys(selectedInstruments)
    .filter(instrument => selectedInstruments[instrument])

  const filteredStudios = studios.filter(studio => {
    const matchesLocation = location === "" || studio.location.toLowerCase().includes(location.toLowerCase())
    const matchesInstruments = selectedInstrumentList.every(instrKey => 
      studio.instruments.some(studioInstr => 
        studioInstr.replace(/\s+/g, '').toLowerCase() === instrKey.toLowerCase()
      )
    )
    
    return matchesLocation && matchesInstruments
  })

  const displayedStudios = filteredStudios.map(studio =>
    <StudioCard
      key={studio.id}
      image={studio.image}
      location={studio.location}
      name={studio.name}
      instruments={studio.instruments}
      id={studio.id}
      price={studio.price}
      bookings={studio.bookings}
      currentUser={currentUser}
    />
  )

  return (
    <div className="findStudioContainer">
      <form className="filterForm">
      <input  id='searchInput'type='search' placeholder='Search by Location' value={location} onChange={handleLocationChange}
        />
      <div id="checkBoxContainer">
       {Object.keys(selectedInstruments).map(instrument => (
        <div key={instrument} className="instrumentCheckbox">
          <label htmlFor={instrument}>
            {instrument.replace(/([A-Z])/g, ' $1')}
          </label>
          <input type="checkbox" id={instrument}   onChange={handleInstrumentChange} checked={selectedInstruments[instrument]}
          />
        </div>
        ))}</div>
      </form>

      <div className='studioContainer'>
        {displayedStudios}
      </div>
    </div>
  )
}

export default FindStudio
