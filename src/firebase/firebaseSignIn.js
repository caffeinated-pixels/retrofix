import { firebaseAuth } from './config'
import { signInWithEmailAndPassword } from '@firebase/auth'

export default async function firebaseSignIn(email, password) {
  try {
    const response = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )

    console.log(response)
    return response.user
  } catch (error) {
    console.log(error.message)
  }
}
