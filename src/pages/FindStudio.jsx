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
    const matchesInstruments = selectedInstrumentList.every(instr =>
      studio.instruments.includes(instr)
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
      currentUser={currentUser}
    />
  )

  return (
    <div>
      <form>
        <input  type='search' placeholder='Search by Location' value={location} onChange={handleLocationChange}
        />

       {Object.keys(selectedInstruments).map(instrument => (
        <div key={instrument}>
          <label htmlFor={instrument}>
            {instrument.replace(/([A-Z])/g, ' $1')}
          </label>
          <input type="checkbox" id={instrument}   onChange={handleInstrumentChange} checked={selectedInstruments[instrument]}
          />
        </div>
        ))}
      </form>

      <div>
        {displayedStudios}
      </div>
    </div>
  )
}

export default FindStudio
