import React from 'react'
import { useOutletContext } from "react-router-dom"
import NewStudioForm from '../components/NewStudioForm'


function NewStudio() {
  const {studios,setStudios}=useOutletContext()
  return (
    <div>
      <NewStudioForm studios={studios} setStudios={setStudios}/>
    </div>
  )
}

export default NewStudio