import React, { useContext } from 'react';
import { ErrorsContext } from '../../context/errorsContext';
import { ThemeParkContext } from '../../context/themeParkContext';
import { UserContext } from '../../context/userContext';
import ItineraryItem from '../itineraries/ItineraryItem';

function UserItineraries() {
  const { user, handleDeleteItinerary, handleUpdateItinerary} = useContext(UserContext)
  const { themeParks } = useContext(ThemeParkContext)
  const { setErrors } = useContext(ErrorsContext)

  const displayItineraries = user?.itineraries.map(itinerary => {
    return <ItineraryItem key={itinerary.id} itinerary={itinerary} setErrors={setErrors} onDeleteItinerary={handleDeleteItinerary} themeParks={themeParks} onUpdateItinerary={handleUpdateItinerary}/>
  })

  return (
    <div className='intineraries-container'>
      {displayItineraries}
    </div>
  );
}

export default UserItineraries;
