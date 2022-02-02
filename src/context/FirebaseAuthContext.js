import { createContext, useState, useContext, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../firebase/config'

const FirebaseAuthContext = createContext()

export default function FirebaseAuthContextProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const authListener = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser)
    })

    return authListener
  }, [])

  return (
    <FirebaseAuthContext.Provider value={user}>
      {children}
    </FirebaseAuthContext.Provider>
  )
}

export const useAuth = () => useContext(FirebaseAuthContext)
