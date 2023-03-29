import React, { useContext } from 'react';
import { ReviewsContext } from '../../context/reviewContext';
import { ThemeParkContext } from '../../context/themeParkContext';
import { UserContext } from '../../context/userContext';
import ThemeParkCard from './ThemeParkCard'
import AddReviewForm from '../reviews/AddReviewForm'

function Home() {
  const { themeParks, handleDeleteThemePark } = useContext(ThemeParkContext);
  const { rideReview } = useContext(ReviewsContext)
  const { user } = useContext(UserContext)

  console.log(rideReview)

  const displayThemeParks = themeParks.map(themePark => {
    return (
      // <h1 key={themePark.id}>{themePark.name}</h1>
      <ThemeParkCard key={themePark.id} user={user} themePark={themePark} onDeleteThemePark={handleDeleteThemePark} />
    )
  })

  const displayReviews = rideReview?.ride_users?.map(review => {
    return (
      <div key={review.id} className='review'>
        <h6>{review.user_name}   |    Rating: {review.rating}</h6>
        <p>{review.review}</p>
      </div>
    )
  })

  return (
    <div className='main-container'>
      <div>
        {displayThemeParks}
      </div>
      <div className='review-card-container'>
        <div className='review-card'>
          <h2>{rideReview?.name}</h2>
          <AddReviewForm rideReview={rideReview}/>
          {displayReviews}
        </div>
        <button>Review</button>
      </div>
    </div>
  );
}

export default Home;
