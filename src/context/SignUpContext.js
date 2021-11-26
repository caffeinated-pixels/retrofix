import { useState, createContext } from 'react'

const SignUpContext = createContext()

export default function SignUpContextProvider({ children }) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SignUpContext.Provider
      value={{
        firstName,
        setFirstName,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </SignUpContext.Provider>
  )
}
