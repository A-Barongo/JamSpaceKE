import React from 'react';
import { useOutletContext } from "react-router-dom"
import StudioCard from '../components/StudioCard'
function Home() {
  const { studios,currentUser} = useOutletContext()
  return (
    <div className="homeContainer">

    <article className="homeArticle">
      JamSpaceKE is a platform designed to connect artists, producers, and creatives with music studios that
      fit their needs. Whether you're looking for a studio in a specific location or one equipped with 
      particular instruments, we make it easy to search, compare, and book the perfect space for your next
      session. 
      Our goal is to simplify the booking process and support the creative community by providing
      a seamless, reliable, and transparent way to access studio time.  Whether you're recording your first
      track or your next big project, we're here to help you find the right vibe to bring your sound to life. 
      </article>
      <h1>STUDIOS</h1>
      <div className='homeStudios'>
       
     {studios.map(studio =>
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
  )}
      </div>

    </div>
  );
}

export default Home;
