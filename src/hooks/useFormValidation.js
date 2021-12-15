import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload }
    case 'SET_PASSWORD':
      return { ...state, password: action.payload }
    case 'SET_INPUT_ERROR':
      return { ...state, inputError: action.payload }
    case 'SET_FIREBASE_ERROR':
      return { ...state, firebaseError: action.payload }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default function useFormValidation() {
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    password: '',
    inputError: false,
    firebaseError: '',
  })

  return [state, dispatch]
}
