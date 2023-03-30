import { createContext, useState } from "react";
// import { ErrorsContext } from "./errorsContext";

const ReviewsContext = createContext({})

const ReviewProvider = ({ children }) => {
  const [rideReview, setRideReview] = useState(null)
  const [isWritingReview, setIsWritingReview] = useState(false)

  function addRideReview(review) {
    setRideReview({
      ...rideReview,
      ride_users: [...rideReview.ride_users, review]
    })
  }

  function deleteReview(deletedReviewId) {
    const newReviewList = rideReview.ride_users.filter(review => review.id !== deletedReviewId)
    setRideReview({
      ...rideReview,
      ride_users: newReviewList
    })
  }

  return (
    <ReviewsContext.Provider value={{rideReview, setRideReview, isWritingReview, setIsWritingReview, addRideReview, deleteReview}}>
      {children}
    </ReviewsContext.Provider>
  )
}

export { ReviewsContext, ReviewProvider };