import React from 'react';

function UserItineraries({ user }) {
  const { itineraries } = user

  const displayItineraries = itineraries.map(itinerary => {
    const { rides } = itinerary

    const displayRides = rides.map(ride => <p key={ride.id}>{ride.name}</p>)

    return (
      <div key={itinerary.id}>
        <h2>{itinerary.name}</h2>
        {displayRides}
      </div>
    )
  })

  return (
    <div>
      {displayItineraries}
    </div>
  );
}

export default UserItineraries;
