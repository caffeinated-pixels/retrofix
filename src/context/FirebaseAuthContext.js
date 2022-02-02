import { createContext, useState, useContext, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../firebase/config'

const FirebaseAuthContext = createContext()
const retroFixUser = JSON.parse(localStorage.getItem('retroFixUser'))

export default function FirebaseAuthContextProvider({ children }) {
  const [user, setUser] = useState(retroFixUser)

  useEffect(() => {
    const authListener = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        localStorage.setItem('retroFixUser', JSON.stringify(currentUser))
        setUser(currentUser)
      } else {
        localStorage.removeItem('retroFixUser')
        setUser(null)
      }
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
