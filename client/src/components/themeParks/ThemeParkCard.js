import React from 'react';

function ThemeParkCard({ themePark, onDeleteThemePark }) {

  const displayRides = themePark.rides.map(ride => {
    return (
      <div key={ride.id}>
        <h5>{ride.name}</h5>
      </div>
    )
  })

  function deleteThemePark() {
    fetch(`/theme_parks/${themePark.id}`, {
      method: 'DELETE'
    })
    .then(r => {
      if (r.ok) {
        r.json().then(() => onDeleteThemePark(themePark))
      } else {
        r.json().then(error => console.log(error))
      }
    })
  }

  return (
    <div className='theme-park-card'>
      <h1>
        {themePark.name}
        <p>{themePark.description}</p>
      </h1>
      <div className='confetti-img'>
        <img src='https://ouch-cdn2.icons8.com/yDvNZl6407AbRY_38thrJrki8VbVw2M4DM92MEJ9ZW8/rs:fit:256:185/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTg2/LzlkZjBkM2E0LTcz/NGQtNDQ2Ni1iMTk5/LWIwYjg2OGI1YTg2/MS5zdmc.png' />
      </div>
      <div className='ride-container' >
        {displayRides}
      </div>
      
      <button onClick={deleteThemePark}>Delete</button>
    </div>
  );
}

export default ThemeParkCard;
