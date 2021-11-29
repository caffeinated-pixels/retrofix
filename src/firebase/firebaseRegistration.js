import { firebaseAuth } from './config'
import { createUserWithEmailAndPassword } from '@firebase/auth'

export default async function firebaseRegistration(email, password) {
  // pass in email, password, firstName (all stored in global state)
  try {
    const user = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )
    console.log(user)
  } catch (error) {
    console.log(error.message)
  }
}
