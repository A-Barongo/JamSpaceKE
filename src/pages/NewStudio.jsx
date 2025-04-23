import React from 'react'
import { useOutletContext } from "react-router-dom"
import NewStudioForm from '../components/NewStudioForm'

const {studios,setStudios}=useOutletContext()
function NewStudio() {
  return (
    <div>
      <NewStudio studios={studios} setStudios={setStudios}/>
    </div>
  )
}

export default NewStudio