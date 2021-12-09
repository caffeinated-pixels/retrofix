import { firebaseAuth } from './config'
import { signOut } from '@firebase/auth'

export default async function firebaseSignOut() {
  try {
    await signOut(firebaseAuth)
  } catch (error) {
    console.log(error.message)
  }
}
