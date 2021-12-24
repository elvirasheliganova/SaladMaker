import { createContext, useState } from "react";


export const UserContext = createContext({})

export const UserContextProvider = ({children}) => {
  const user = 'Elvira'
  const [favs, setFavs] = useState('')
  const value = {
    user,
    favs,
    setFavs
  }
  return (
    <UserContext.Provider value = {value}>
      {children}
    </UserContext.Provider>
  )
}