import React, {useState} from 'react';
import EditItineraryForm from './EditItineraryForm';

function ItineraryItem({ itinerary, setErrors, onDeleteItinerary, themeParks }) {
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
    isEditing ? 
    <EditItineraryForm itinerary={itinerary} themeParks={themeParks}/>
    :
    <div key={itinerary.id} className='card'>
      <h2>{itinerary.name}</h2>
      <div className='container'>
        <p>start: {start_date} end: {end_date}</p>
        {displayRides}
      </div>
      <button onClick={editClick}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )

}

export default ItineraryItem;
