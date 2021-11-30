import { firebaseAuth } from './config'
import { signInWithEmailAndPassword } from '@firebase/auth'

export default async function firebaseSignIn(email, password) {
  console.log(email, password)

  try {
    const user = await signInWithEmailAndPassword(firebaseAuth, email, password)

    console.log(user)
  } catch (error) {
    console.log(error.message)
  }
}
