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
              <h6>{review.user_name}   |    Rating: {review.rating}</h6>
              <div className='review-grid'>
                <p>{review.review}</p>
                <div></div>
                <button onClick={() => setIsEditingReview(edit => !edit)}>Edit</button>
                <button onClick={handleDeleteReview}>Delete</button>
              </div>
            </div>
          </>
      }
    </>


  )
}

export default ReviewItem;
