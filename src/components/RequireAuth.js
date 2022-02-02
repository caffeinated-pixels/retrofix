import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/FirebaseAuthContext'

export default function RequireAuth() {
  const user = useAuth()

  if (!user) {
    return <Navigate to='/signin' />
  }

  return <Outlet />
}
