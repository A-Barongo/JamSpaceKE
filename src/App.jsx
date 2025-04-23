import Navbar from './components/Navbar'
import './App.css'
import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [data,setData]=useState(
    users,
    studios,
    bookings
  )
  const[users,setUsers]=useState([])
 const[studios,setStudios]=useState([])
  const[bookings,setBookings]=useState([])
  

  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(res=>res.json())
    .then(d=>setData(d))
    .then(
      setUsers(data.users),
      setStudios(data.studios),
      setBookings(data.bookings)
    )
  
  }, [])
  

  return (
    <>
      <div className="headerSection">
         <img src='./assets/jamspaceLogo.png'/>
         <Navbar/>
      </div>
      <Outlet context={{users,studios,bookings,setUsers,setBookings,setStudios}}/>
    </>
  )
}

export default App
