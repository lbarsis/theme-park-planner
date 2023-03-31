import React, { useContext } from 'react';
import { ThemeParkContext } from '../../context/themeParkContext';
import { UserContext } from '../../context/userContext';
import ReviewCard from '../reviews/ReviewCard';
import ThemeParkCard from './ThemeParkCard'
import { ReviewsContext } from '../../context/reviewContext';

function Home() {
  const { themeParks, handleDeleteThemePark } = useContext(ThemeParkContext);
  const { user } = useContext(UserContext)
  const { ride } = useContext(ReviewsContext)

  const displayThemeParks = themeParks.map(themePark => {
    return (
      <ThemeParkCard key={themePark.id} user={user} themePark={themePark} onDeleteThemePark={handleDeleteThemePark} />
    )
  })

  return (
    <div className='main-container'>
      <div>
        {displayThemeParks}
      </div>
      {
        ride ?
          <ReviewCard />
          :
          null
      }
    </div>
  );
}

export default Home;
