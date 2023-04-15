import React, { useContext, useState } from 'react';
import { ReviewsContext } from '../../context/reviewContext';
import EditReviewItem from './EditReviewItem';
import { UserContext } from '../../context/userContext';
import { ErrorsContext } from '../../context/errorsContext';

function ReviewItem({ review }) {
  const { deleteReview } = useContext(ReviewsContext)
  const { user } = useContext(UserContext)
  const { setErrors, errors } = useContext(ErrorsContext)
  const [isEditingReview, setIsEditingReview] = useState(false)

  function handleDeleteReview() {
    fetch(`/ride_users/${review.id}`, {
      method: 'DELETE'
    })
      .then(r => {
        if (r.ok) {
          r.json().then(() => deleteReview(review))
        } else {
          r.json().then(errors => setErrors(errors))
        }
      })
  }

  function handleShowAddReviewForm() {
    setIsEditingReview(edit => !edit)
    setErrors(null)
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
                <h6>{review.username}   |    Rating: {review.rating}</h6>
                <div></div>

                {
                  review.username === user?.username ?
                    <>
                      <button onClick={handleShowAddReviewForm}>✏️</button>
                      <button onClick={handleDeleteReview}>🗑️</button>
                    </>
                    :
                    null
                }
              </div>
              <p>{review.review}</p>
            </div>
            {
              errors ?
                errors.errors.map(error => <p key={error}>{error}</p>)
                :
                null
            }
          </>
      }
    </>


  )
}

export default ReviewItem;
