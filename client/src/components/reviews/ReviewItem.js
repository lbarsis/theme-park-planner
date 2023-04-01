import React, { useContext, useState } from 'react';
import { ReviewsContext } from '../../context/reviewContext';
import EditReviewItem from './EditReviewItem';

function ReviewItem({ review }) {
  const { deleteReview } = useContext(ReviewsContext)
  const [isEditingReview, setIsEditingReview] = useState(false)

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
    <>
      {
        isEditingReview ?
          <EditReviewItem setIsEditingReview={setIsEditingReview} review={review} />
          :
          <>
            <div className='review'>
              <div className='review-grid'>
                <h6>{review.user_name}   |    Rating: {review.rating}</h6>
                <div></div>
                <button onClick={() => setIsEditingReview(edit => !edit)}>✏️</button>
                <button onClick={handleDeleteReview}>🗑️</button>
              </div>
              <p>{review.review}</p>
            </div>
          </>
      }
    </>


  )
}

export default ReviewItem;
