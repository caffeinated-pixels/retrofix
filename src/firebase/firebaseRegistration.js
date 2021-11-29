import { firebaseAuth } from './config'
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth'

export default async function firebaseRegistration(
  globalFirstName,
  email,
  password
) {
  try {
    const user = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )

    await updateProfile(firebaseAuth.currentUser, {
      displayName: globalFirstName,
      photoURL: '../images/users/1.png',
    })
    console.log(user)
    console.log(
      firebaseAuth.currentUser.displayName,
      firebaseAuth.currentUser.photoURL
    )
  } catch (error) {
    console.log(error.message)
  }
}
