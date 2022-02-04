import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/FirebaseAuthContext'
import { PROFILE } from '../constants/routes'

export default function RedirectUser() {
  const user = useAuth()
  const location = useLocation()

  if (location.pathname === '/signup/planform') {
    return user?.displayName ? <Navigate to={PROFILE} /> : <Outlet />
  } // this prevents an issue immediately after registration, where the user object from Firebase doesn't yet contain displayName and photoURL properties (which results in a blank profile until refresh). It prevents redirection, allowing the planform page to wait until updateProfile completes before navigating to the profile page.

  return user ? <Navigate to={PROFILE} /> : <Outlet />
  // if user is logged in, send them to the profile page like on Netflix
}
