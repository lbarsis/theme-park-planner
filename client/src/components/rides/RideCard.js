import React, { useContext } from 'react';
import { ReviewsContext } from '../../context/reviewContext';

function RideCard({ ride }) {
  const { setRideReview } = useContext(ReviewsContext)

  function handleRideReview() {
    fetch(`/rides/${ride.id}`)
    .then(r => r.json())
    .then(ride => setRideReview(ride))
  }

  return (
    <>
      <div key={ride.id} onClick={handleRideReview}>
        <h5>{ride.name}</h5>
        <p>Average Rating: {ride.average_rating}</p>
      </div>
    </>
  );
}

export default RideCard;
