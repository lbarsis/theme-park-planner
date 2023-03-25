import { createContext, useState, useEffect, useContext } from "react";
import { ErrorsContext } from "./errorsContext";

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([])
  const { setErrors } = useContext(ErrorsContext);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then(errors => {
          setErrors(errors)
        })
      }
    });
  }, []);

  
  useEffect(() => {
    fetch('/users').then(r => {
      if (r.ok) {
        r.json().then(users => setUsers(users))
      } else {
        r.json().then(errors => setErrors(errors))
      }
    })

  }, [])
  
  function handleAddNewItinerary(itinerary) {
    setUser({
      ...user,
      itineraries: [...user.itineraries, itinerary]
    })
  }

  function handleUpdateItinerary(updatedItinerary) {
    const updatedItineraries = user.itineraries.map(itinerary => {
      if (itinerary.id === updatedItinerary.id) {
        return updatedItinerary
      } else {
        return itinerary
      }
    })
    setUser({
      ...user,
      itineraries: updatedItineraries
    })
  }

  function handleDeleteItinerary(deletedItineraryId) {
    const newItinerariesList = user.itineraries.filter(itinerary => itinerary.id !== deletedItineraryId)
    setUser({
      ...user,
      itineraries: newItinerariesList
    })
  }

  return (
    <UserContext.Provider value={ {user, setUser, users, handleAddNewItinerary, handleDeleteItinerary, handleUpdateItinerary}}>
      {children}
    </UserContext.Provider>
  )

}

export { UserContext, UserProvider };

