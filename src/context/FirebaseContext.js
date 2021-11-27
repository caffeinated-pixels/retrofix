import { createContext } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const FirebaseContext = createContext()

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}
// Google recommends hiding the config values if publishing as open source
// TODO: when I publish, I will need to setup Netlify functions to replace these env variables

const firebaseApp = initializeApp(firebaseConfig)
// this is the Firebase App object, which is passed to components down via Context

const firebaseAuth = getAuth(firebaseApp)

export default function FirebaseContextProvider({ children }) {
  return <FirebaseContext value={firebaseApp}>{children}</FirebaseContext>
}
