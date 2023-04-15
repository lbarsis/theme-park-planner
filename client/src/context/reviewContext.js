import { createContext, useContext, useState } from "react";
import { UserContext } from "./userContext";
// import { ErrorsContext } from "./errorsContext";

const ReviewsContext = createContext({})

const ReviewProvider = ({ children }) => {
  const {user, setUser} = useContext(UserContext)
  const [ride, setRide] = useState(null)
  const [isWritingReview, setIsWritingReview] = useState(false)
  const [isEditingReview, setIsEditingReview] = useState(false)

  function addReview(review) {
    setRide({
      ...ride,
      ride_users: [...ride.ride_users, review]
    })
    setUser({
      ...user,
      my_rides: [...user.my_rides, review.ride]
    })
  }

  function deleteReview(deletedReview) {
    const newReviewList = ride.ride_users.filter(review => review.id !== deletedReview.id)
    const newUserRideList = user.my_rides.filter(ride => ride.id !== deletedReview.ride.id)
    setRide({
      ...ride,
      ride_users: newReviewList
    })
    setUser({
      ...user,
      my_rides: newUserRideList
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