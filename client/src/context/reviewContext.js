import { createContext, useState } from "react";
// import { ErrorsContext } from "./errorsContext";

const ReviewsContext = createContext({})

const ReviewProvider = ({ children }) => {
  const [ride, setRide] = useState(null)
  const [isWritingReview, setIsWritingReview] = useState(false)
  const [isEditingReview, setIsEditingReview] = useState(false)

  function addReview(review) {
    setRide({
      ...ride,
      ride_users: [...ride.ride_users, review]
    })
  }

  function deleteReview(deletedReviewId) {
    const newReviewList = ride.ride_users.filter(review => review.id !== deletedReviewId)
    setRide({
      ...ride,
      ride_users: newReviewList
    })
  }

  function handleUpdateReview(updatedReview) {
    const updatedReviews = ride.ride_users.map(review => {
      if (review.id === updatedReview.id) {
        return updatedReview
      } else {
        return review
      }
    })
    setRide({
      ...ride,
      ride_users: updatedReviews
    })
  }

  return (
    <ReviewsContext.Provider value={{ride, setRide, isWritingReview, setIsWritingReview, addReview, deleteReview, isEditingReview, setIsEditingReview, handleUpdateReview }}>
      {children}
    </ReviewsContext.Provider>
  )
}

export { ReviewsContext, ReviewProvider };