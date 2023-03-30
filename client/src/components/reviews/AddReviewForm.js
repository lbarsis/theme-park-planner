import React, { useContext, useState } from 'react';
import {ErrorsContext} from '../../context/errorsContext'
import { ReviewsContext } from '../../context/reviewContext';

function AddReviewForm() {
  const { setErrors } = useContext(ErrorsContext)
  const { rideReview, addRideReview, setIsWritingReview } = useContext(ReviewsContext)
  const [formData, setFormData] = useState({
    // theme_park: '',
    // ride: '',
    rating: '',
    review: ''
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch('/ride_users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ride_id: rideReview.id,
        rating: formData.rating,
        review: formData.review
      })
    })
    .then(r => {
      if (r.ok) {
        r.json().then(review => addRideReview(review))
      } else {
        r.json().then(errors => setErrors(errors))
      }
    })

    setFormData({
      review: ''
    })

    setIsWritingReview(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Rating</label>
        <div className="star-rating">
            <input type="radio" id="star5" name="rating" onChange={handleChange} value="5"/>
            <label htmlFor="star5" className="star">&#9733;</label>
            <input type="radio" id="star4" name="rating" onChange={handleChange} value="4"/>
            <label htmlFor="star4" className="star">&#9733;</label>
            <input type="radio" id="star3" name="rating" onChange={handleChange} value="3"/>
            <label htmlFor="star3" className="star">&#9733;</label>
            <input type="radio" id="star2" name="rating" onChange={handleChange} value="2"/>
            <label htmlFor="star2" className="star">&#9733;</label>
            <input type="radio" id="star1" name="rating" onChange={handleChange} value="1"/>
            <label htmlFor="star1" className="star">&#9733;</label>
        </div>
        {/* <input
          type="text"
          name="rating"
          onChange={handleChange}
          value={formData.rating}
        /> */}

        <br />

        <label>Review</label><br />
        <textarea
          id='review-text'
          type="text"
          name="review"
          onChange={handleChange}
          value={formData.review}
        />

        <button type='submit' id='submit-review-button'>Submit</button>
      </form>
    </div>
  );
}

export default AddReviewForm;