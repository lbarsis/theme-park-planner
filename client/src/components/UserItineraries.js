import React from 'react';
import ItineraryItem from './ItineraryItem';

function UserItineraries({ user, setErrors, onDeleteItinerary, themeParks, onUpdateItinerary }) {
  const { itineraries } = user

  const displayItineraries = itineraries.map(itinerary => {
    return <ItineraryItem key={itinerary.id} itinerary={itinerary} setErrors={setErrors} onDeleteItinerary={onDeleteItinerary} themeParks={themeParks} onUpdateItinerary={onUpdateItinerary}/>
  })

  return (
    <div className='intineraries-container'>
      {displayItineraries}
    </div>
  );
}

export default UserItineraries;
