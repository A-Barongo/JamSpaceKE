import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="headerSection">
         <img src='./assets/jamspaceLogo.png'/>
      </div>
      <Navbar/>
    </>
  )
}

export default App
