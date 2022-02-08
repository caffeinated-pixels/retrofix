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
    return response.user
  } catch (error) {
    console.log(error.message)
  }
}

function generateRandomPhotoUrl() {
  const randomNum = Math.ceil(Math.random() * 6)
  return `./images/users/${randomNum}.png`
}
