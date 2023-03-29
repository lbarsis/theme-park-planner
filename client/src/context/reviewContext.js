import { createContext, useState } from "react";
// import { ErrorsContext } from "./errorsContext";

const ReviewsContext = createContext({})

const ReviewProvider = ({ children }) => {
  const [rideReview, setRideReview] = useState(null)

  return (
    <ReviewsContext.Provider value={{rideReview, setRideReview}}>
      {children}
    </ReviewsContext.Provider>
  )

}

export { ReviewsContext, ReviewProvider };