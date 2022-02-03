import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/FirebaseAuthContext'
import { PROFILE } from '../constants/routes'

export default function RedirectUser() {
  const user = useAuth()

  return user ? <Navigate to={PROFILE} /> : <Outlet />
  // if user is logged in, send them to the profile page like on Netflix
}
