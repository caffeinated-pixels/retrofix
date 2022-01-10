import { useNavigate } from 'react-router-dom'
import firebaseSignOut from '../firebase/firebaseSignOut'
import { HOME } from '../constants/routes'

export default function useSignOut() {
  const navigate = useNavigate()

  return async () => {
    await firebaseSignOut()
    console.log('signed out!')
    navigate(HOME)
  }
}
