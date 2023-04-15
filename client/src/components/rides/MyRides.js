import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

function MyRides() {
  const { user } = useContext(UserContext)

  const displayRides = user?.my_rides.map(ride => <p key={ride.id}>{ride.name}</p>)

  return (
    <div>
      <h4>{user?.username} Rides:</h4>
      {displayRides}
    </div>
  );
}

export default MyRides;
