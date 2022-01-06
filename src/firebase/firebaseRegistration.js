import { firebaseAuth } from './config'
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth'

export default async function firebaseRegistration(
  globalFirstName,
  email,
  password
) {
  try {
    const response = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )

    await updateProfile(firebaseAuth.currentUser, {
      displayName: globalFirstName,
      photoURL: generateRandomPhotoUrl(),
    })
    console.log(response)
    console.log(
      firebaseAuth.currentUser.displayName,
      firebaseAuth.currentUser.photoURL
    )
    return response.user
  } catch (error) {
    console.log(error.message)
  }
}

function generateRandomPhotoUrl() {
  const randomNum = Math.ceil(Math.random() * 5)
  return `./images/users/${randomNum}.png`
}
