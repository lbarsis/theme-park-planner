import React from 'react';
import ItineraryItem from './ItineraryItem';

function UserItineraries({ user, setErrors, onDeleteItinerary }) {
  const { itineraries } = user

  const displayItineraries = itineraries.map(itinerary => {
    return <ItineraryItem key={itinerary.id} itinerary={itinerary} setErrors={setErrors} onDeleteItinerary={onDeleteItinerary}/>
  })

  return (
    <div className='intineraries-container'>
      {displayItineraries}
    </div>
  );
}

export default UserItineraries;
