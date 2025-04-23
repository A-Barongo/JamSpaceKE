import React from 'react'
import LogInForm from '../components/LogInForm'
import { useOutletContext } from "react-router-dom"

function Home() {
  return (
    <div>
        <LogInForm/>
    </div>
  )
}

export default Home