import React from 'react';

function UserItineraries({ user }) {
  const { itineraries } = user

  const displayItineraries = itineraries.map(itinerary => {
    const { rides } = itinerary

    const displayRides = rides.map(ride => <p key={ride.id}>{ride.name}</p>)

    return (
      <div key={itinerary.id} className='card'>
        <h2>{itinerary.name}</h2>
        <div className='container'>
          {displayRides}
        </div>
        <button>Edit</button>
        <button>Delete</button>
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
