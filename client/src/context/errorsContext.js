import { createContext, useState, useEffect } from "react";

const ErrorsContext = createContext([])

const ErrorsProvider = ({ children }) => {
  const [errors, setErrors] = useState(null);

  return (
    <ErrorsContext.Provider value={ {errors, setErrors} }>
      {children}
    </ErrorsContext.Provider>
  )

}

export {ErrorsContext, ErrorsProvider};