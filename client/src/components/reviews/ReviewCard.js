import React, { useContext } from 'react';
import { ReviewsContext } from '../../context/reviewContext';
import AddReviewForm from '../reviews/AddReviewForm'
import ReviewItem from './ReviewItem';
import { ErrorsContext } from '../../context/errorsContext';

function ReviewCard() {
  const { ride, isWritingReview, setIsWritingReview } = useContext(ReviewsContext)
  const {  setErrors } = useContext(ErrorsContext)

  const displayReviews = ride?.ride_users?.map(review => {
    return (
      <ReviewItem key={review.id} review={review} />
    )
  })

  function handleShowAddReviewForm() {
    setIsWritingReview(review => !review)
    setErrors(null)
  }

  return (
    <div className='review-card-container'>

      <div className='review-card'>
        <h2>
          {ride?.name}
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
        <button onClick={handleShowAddReviewForm}>Review</button>
      </div>
    </div>
  );
}

export default ReviewCard;
