import { useState, createContext } from 'react'

export const SignUpContext = createContext()

export default function SignUpContextProvider({ children }) {
  const [globalFirstName, setGlobalFirstName] = useState('')
  const [globalEmail, setGlobalEmail] = useState('')
  const [globalPassword, setGlobalPassword] = useState('')

  return (
    <SignUpContext.Provider
      value={{
        globalFirstName,
        setGlobalFirstName,
        globalEmail,
        setGlobalEmail,
        globalPassword,
        setGlobalPassword,
      }}
    >
      {children}
    </SignUpContext.Provider>
  )
}
