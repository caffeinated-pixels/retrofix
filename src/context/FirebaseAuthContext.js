import { createContext, useState, useContext } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../firebase/config'

const FirebaseAuthContext = createContext()

export default function FirebaseAuthContextProvider({ children }) {
  const [user, setUser] = useState(null)

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    setUser(currentUser)
  })

  return (
    <FirebaseAuthContext.Provider value={user}>
      {children}
    </FirebaseAuthContext.Provider>
  )
}

export const useAuth = () => useContext(FirebaseAuthContext)
