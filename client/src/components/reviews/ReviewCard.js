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
          <button onClick={() => setIsWritingReview(review => !review)}>Review</button>
        </h2>
        {
          isWritingReview ?
            <AddReviewForm />
            :
            null
        }
        {displayReviews}
      </div>
    </div>
  );
}

export default ReviewCard;
