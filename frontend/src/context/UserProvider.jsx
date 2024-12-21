import { useState } from "react"
import UserContext1 from "./UserContext1"

// eslint-disable-next-line react/prop-types
const UserProvider = ({children}) => {
  const [updatedData,setUpdated]=useState({});

  
  return (
    <UserContext1.Provider value={{updatedData,setUpdated}}>
        {children}
    </UserContext1.Provider>
  )
}

export default UserProvider