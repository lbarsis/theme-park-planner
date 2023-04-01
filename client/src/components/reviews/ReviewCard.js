import React, { useContext } from 'react';
import { ReviewsContext } from '../../context/reviewContext';
import AddReviewForm from '../reviews/AddReviewForm'
import ReviewItem from './ReviewItem';

function ReviewCard() {
  const { ride, isWritingReview, setIsWritingReview } = useContext(ReviewsContext)

  const displayReviews = ride?.ride_users?.map(review => {
    return (
      <ReviewItem key={review.id} review={review} />
    )
  })

  return (
    <div className='review-card-container'>

      <div className='review-card'>
        <h2>
          {ride?.name}
          <p>Average Rating: {ride?.average_rating}</p>
        </h2>
        <div className='scroll-container'>
          {
            isWritingReview ?
              <AddReviewForm />
              :
              null
          }
          {displayReviews}
        </div>
        <button onClick={() => setIsWritingReview(review => !review)}>Review</button>
      </div>
    </div>
  );
}

export default ReviewCard;
