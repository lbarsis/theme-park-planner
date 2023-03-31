import React, { useContext } from 'react';
import { ReviewsContext } from '../../context/reviewContext';

function RideCard({ ride }) {
  const { setRide } = useContext(ReviewsContext)

  function handleSetRide() {
    fetch(`/rides/${ride.id}`)
    .then(r => r.json())
    .then(ride => setRide(ride))
  }
  
  return (
    <>
      <div key={ride.id} onClick={handleSetRide}>
        <h5>{ride.name}</h5>
      </div>
    </>
  );
}

export default RideCard;
