import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/FirebaseAuthContext'
import { SIGN_IN } from '../constants/routes'

export default function RequireAuth() {
  const user = useAuth()

  return user ? <Outlet /> : <Navigate to={SIGN_IN} replace />
  // replace attr allows user to return to the page they came from using the browser back button
}
