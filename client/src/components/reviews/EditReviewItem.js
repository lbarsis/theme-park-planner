import React, { useContext, useState } from 'react';
import { ReviewsContext } from '../../context/reviewContext';
import { ErrorsContext } from '../../context/errorsContext';

function EditReviewItem({ review, setIsEditingReview }) {
  const { handleUpdateReview } = useContext(ReviewsContext)
  const { errors, setErrors } = useContext(ErrorsContext)
  const [formData, setFormData] = useState({
    rating: parseInt(review.rating, 10),
    review: review.review
  })

  function handleChange(e) {
    const value = e.target.name === "rating" ? parseInt(e.target.value, 10) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch(`/ride_users/${review.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rating: formData.rating,
        review: formData.review
      })
    })
      .then(r => {
        if (r.ok) {
          r.json().then(review => {
            handleUpdateReview(review)
            setIsEditingReview(false)
          })
        } else {
          r.json().then(errors => setErrors(errors))
        }
      })
  }

  return (
    <div>
      <>
        <form onSubmit={handleSubmit}>
          <div className="star-rating">
            <input type="radio" id="star5" name="rating" onChange={handleChange} value="5" checked={formData.rating === 5} />
            <label htmlFor="star5" className="star">&#9733;</label>
            <input type="radio" id="star4" name="rating" onChange={handleChange} value="4" checked={formData.rating === 4} />
            <label htmlFor="star4" className="star">&#9733;</label>
            <input type="radio" id="star3" name="rating" onChange={handleChange} value="3" checked={formData.rating === 3} />
            <label htmlFor="star3" className="star">&#9733;</label>
            <input type="radio" id="star2" name="rating" onChange={handleChange} value="2" checked={formData.rating === 2} />
            <label htmlFor="star2" className="star">&#9733;</label>
            <input type="radio" id="star1" name="rating" onChange={handleChange} value="1" checked={formData.rating === 1} />
            <label htmlFor="star1" className="star">&#9733;</label>
            <label><h6>{review.user_name}   |  Rating:</h6></label>
          </div>

          <label><h6>Review:</h6></label><br />
          <textarea
            id='review-text'
            type="text"
            name="review"
            onChange={handleChange}
            value={formData.review}
          />

          <button type='submit' id='submit-review-button'>Submit</button>
        </form>
        {
          errors ?
            errors.errors.map(error => <p key={error}>{error}</p>)
            :
            null
        }
      </>
    </div>
  );
}

export default EditReviewItem;
