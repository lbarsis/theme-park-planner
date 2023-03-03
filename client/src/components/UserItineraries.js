import React from 'react';

function UserItineraries({ user, setErrors, onDeleteItinerary }) {
  const { itineraries } = user

  const displayItineraries = itineraries.map(itinerary => {
    const { id, rides } = itinerary
    const displayRides = rides.map(ride => <p key={ride.id}>{ride.name}</p>)

    function handleDelete() {
      fetch(`/itineraries/${id}`, {
        method: 'DELETE'
      })
        .then(r => {
          if (r.ok) {
            r.json().then(message => {
              // alert(message.message)
              onDeleteItinerary(id)
            })
          } else {
            setErrors({ message: 'Itinerary Not Found' })
          }
        })
    }

    return (
      <div key={itinerary.id} className='card'>
        <h2>{itinerary.name}</h2>
        <div className='container'>
          {displayRides}
        </div>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    )
  })

  return (
    <div className='intineraries-container'>
      {displayItineraries}
    </div>
  );
}

export default UserItineraries;
