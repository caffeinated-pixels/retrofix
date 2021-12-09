import { createContext, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../firebase/config'

export const FirebaseAuthContext = createContext()

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
