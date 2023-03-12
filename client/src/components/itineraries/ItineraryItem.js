import React, { useState } from 'react';
import EditItineraryForm from './EditItineraryForm';

function ItineraryItem({ itinerary, setErrors, onDeleteItinerary, themeParks, onUpdateItinerary }) {
  const [isEditing, setIsEditing] = useState(false)
  const { id, rides, start_date, end_date } = itinerary
  const displayRides = rides.map(ride => <p key={ride.id}>{ride.name}</p>)

  function handleDelete() {
    fetch(`/itineraries/${id}`, {
      method: 'DELETE'
    })
      .then(r => {
        if (r.ok) {
          r.json().then(message => {
            onDeleteItinerary(id)
            alert(message.message)
          })
        } else {
          setErrors({ message: 'Itinerary Not Found' })
        }
      })
  }

  function editClick() {
    setIsEditing(true)
  }

  return (
    <div key={itinerary.id} className='card'>
      {isEditing ?
        <EditItineraryForm itinerary={itinerary} themeParks={themeParks} onUpdateItinerary={onUpdateItinerary} setIsEditing={setIsEditing} />
        :
        <>
          <h2>
            {itinerary.name}
            <p>Start: {start_date}</p>
            <p>End: {end_date}</p>
          </h2>
          <div className='container'>
            {displayRides}
          </div>
          <button onClick={editClick}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      }
    </div>
  )

}

export default ItineraryItem;
