import React, { useContext } from 'react';
import { ReviewsContext } from '../../context/reviewContext';
import AddReviewForm from '../reviews/AddReviewForm'

function ReviewCard() {
  const { rideReview, isWritingReview, setIsWritingReview, deleteReview } = useContext(ReviewsContext)

  const displayReviews = rideReview?.ride_users?.map(review => {

    function handleDeleteReview() {
      fetch(`/ride_users/${review.id}`, {
        method: 'DELETE'
      })
      .then(r => {
        if (r.ok) {
          r.json().then(() => deleteReview(review.id))
        } else {
          r.json().then(errors => console.log(errors))
        }
      })
    }

    return (
      <div key={review.id} className='review'>
        <h6>{review.user_name}   |    Rating: {review.rating}</h6>
        <div className='review-grid'>
          <p>{review.review}</p>
          <div></div>
          <button>Edit</button>
          <button onClick={handleDeleteReview}>Delete</button>
        </div>
      </div>
    )
  })

  return (
    <div className='review-card-container'>
      <div className='review-card'>
        <h2>
          {rideReview?.name}
          <p>Average Rating: {rideReview?.average_rating}</p>
        </h2>
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
  );
}

export default ReviewCard;
