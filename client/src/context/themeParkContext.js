import { createContext, useState, useEffect, useContext } from "react";
import { ErrorsContext } from "./errorsContext";

const ThemeParkContext = createContext([])

const ThemeParkProvider = ({ children }) => {  
  const [themeParks, setThemeParks] = useState([])
  const { setErrors } = useContext(ErrorsContext);

  useEffect(() => {
    fetch('/theme_parks')
      .then(r => {
        if (r.ok) {
          r.json().then(themeParks => setThemeParks(themeParks))
        } else {
          r.json().then(errors => setErrors(errors))
        }
      })
  }, [])


  function handleAddThemePark(newThemePark) {
    setThemeParks([
      ...themeParks,
      newThemePark
    ])
  }

  function handleAddRideToThemePark(newRide) {
    const updatedThemeParks = themeParks.map(themePark => {
      if (themePark.id === newRide.theme_park.id) {
        return (
          {
            ...themePark,
            rides: [...themePark.rides, newRide]
          }
        )
      } else {
        return themePark
      }
    })
    setThemeParks(updatedThemeParks)
  }

  function handleDeleteThemePark(deletedThemePark) {
    const displayThemeParks = themeParks.filter(themePark => themePark.id !== deletedThemePark.id)
    setThemeParks(displayThemeParks)
  }

  return (
    <ThemeParkContext.Provider value={ {themeParks, setThemeParks, handleAddRideToThemePark, handleDeleteThemePark, handleAddThemePark} }>
      {children}
    </ThemeParkContext.Provider>
  )

}

export {ThemeParkContext, ThemeParkProvider};