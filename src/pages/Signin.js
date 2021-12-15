import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import firebaseSignIn from '../firebase/firebaseSignIn'
import { Header, RegNavbar, Footer } from '../parts/'
import { SemanticHeader, MainContainer } from '../containers/'
import { GeneralForm, SigninForm, SubmitButton } from '../components'
import { colors } from '../styles/style-constants'
import { HOME, BROWSE } from '../constants/routes'
import { footerHomeRegistration } from '../fixtures/footer-content'

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload }
    case 'SET_PASSWORD':
      return { ...state, password: action.payload }
    case 'SET_INPUT_ERROR':
      return { ...state, inputError: action.payload }
    case 'SET_FIREBASE_ERROR':
      return { ...state, firebaseError: action.payload }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default function Signin() {
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    password: '',
    inputError: false,
    firebaseError: '',
  })
  const navigate = useNavigate()

  const isEmailLongEnough = state.email.length < 5
  const isPasswordLongEnough = state.password.length < 6

  const emailError = state.inputError && isEmailLongEnough
  const passwordError = state.inputError && isPasswordLongEnough

  const processFirebaseError = (errorMsg) => {
    const isEmailError = /user-not-found/.test(errorMsg)
    const isPasswordError = /wrong-password/.test(errorMsg)

    if (isEmailError) {
      dispatch({
        type: 'SET_FIREBASE_ERROR',
        payload: `Sorry, we can't find an account with this email address. Please try again`,
      })
    }

    if (isPasswordError) {
      dispatch({
        type: 'SET_FIREBASE_ERROR',
        payload: `Incorrect password. Please try again`,
      })
    }
  }

  const contactFirebase = async () => {
    const firebaseResponse = await firebaseSignIn(
      state.email.trim(),
      state.password.trim()
    )
    if (firebaseResponse.user) {
      console.log('succesful signin for ' + firebaseResponse.user.email)
      navigate(BROWSE)
    } else if (firebaseResponse.message) {
      processFirebaseError(firebaseResponse.message)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isEmailLongEnough || isPasswordLongEnough) {
      dispatch({ type: 'SET_INPUT_ERROR', payload: true })
    } else {
      dispatch({ type: 'SET_INPUT_ERROR', payload: false })
      contactFirebase()
    }
  }

  return (
    <>
      <Header noBgOnMobile>
        <Header.ImageGradient>
          <SemanticHeader>
            <RegNavbar noBorder />
          </SemanticHeader>

          <MainContainer>
            <SigninForm>
              <SigninForm.Container>
                <SigninForm.Title>Sign In</SigninForm.Title>
                <GeneralForm>
                  {state.firebaseError && (
                    <SigninForm.FirebaseErrorDisplay>
                      {state.firebaseError}
                    </SigninForm.FirebaseErrorDisplay>
                  )}
                  <SigninForm.InputWrapper>
                    <SigninForm.Input
                      id='signin-email'
                      type='email'
                      placeholder='Email'
                      value={state.email}
                      onChange={(e) =>
                        dispatch({ type: 'SET_EMAIL', payload: e.target.value })
                      }
                      inputError={emailError}
                    />
                    <GeneralForm.HiddenLabel htmlFor='signin-email'>
                      Email Address
                    </GeneralForm.HiddenLabel>
                    {emailError && (
                      <SigninForm.InputError>
                        Please enter a valid email.
                      </SigninForm.InputError>
                    )}
                  </SigninForm.InputWrapper>

                  <SigninForm.InputWrapper>
                    <SigninForm.Input
                      id='signin-password'
                      type='password'
                      placeholder='Password'
                      value={state.password}
                      onChange={(e) =>
                        dispatch({
                          type: 'SET_PASSWORD',
                          payload: e.target.value,
                        })
                      }
                      inputError={passwordError}
                    />
                    <GeneralForm.HiddenLabel htmlFor='signin-password'>
                      Password
                    </GeneralForm.HiddenLabel>
                    {passwordError && (
                      <SigninForm.InputError>
                        Your password must contain at least 6 characters.
                      </SigninForm.InputError>
                    )}
                  </SigninForm.InputWrapper>

                  <SubmitButton maxWidth='100%' boldText onClick={handleSubmit}>
                    Sign In
                  </SubmitButton>
                </GeneralForm>
              </SigninForm.Container>
              <SigninForm.Text>
                New to Netflix?{' '}
                <SigninForm.Link href={HOME}>Sign up now</SigninForm.Link>.
              </SigninForm.Text>
              <SigninForm.ReCaptchaText>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </SigninForm.ReCaptchaText>
            </SigninForm>
          </MainContainer>
          <Footer
            footerContent={footerHomeRegistration}
            bgColor={colors.bgBlackTrans}
            borderTop={colors.textMedGrey}
            borderOnlyOnMobile
          />
        </Header.ImageGradient>
      </Header>
    </>
  )
}
