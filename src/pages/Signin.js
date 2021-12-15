import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import firebaseSignIn from '../firebase/firebaseSignIn'
import { Header, RegNavbar, Footer } from '../parts/'
import { SemanticHeader, MainContainer } from '../containers/'
import { GeneralForm, SubmitButton } from '../components'
import { colors, inputErrorBorderBottom } from '../styles/style-constants'
import { HOME, BROWSE } from '../constants/routes'
import { footerHomeRegistration } from '../fixtures/footer-content'

const SignInContentBody = styled.div`
  width: 100%;
  min-height: 550px;
  padding: 20px 5% 30px;

  border-radius: 4px;

  @media (min-width: 740px) {
    min-height: 660px;
    width: 450px;
    margin: 0 auto;

    background-color: ${colors.bgBlackTrans};
    padding: 60px 68px 40px;
    margin-bottom: 90px;
  }
`

const SignInFormContainer = styled.div``

const FormTitle = styled.h1`
  margin-bottom: 28px;
`
const FirebaseErrorDisplay = styled.p`
  margin-bottom: 16px;
  padding: 10px 20px;

  font-size: 0.875rem;
  background-color: ${colors.errTextOrange};

  border-radius: 4px;
`

// take and modify CSS for GeneralForm.Input rather than passing down excessive props
const InputWrapper = styled.div`
  margin-bottom: 16px;
`

const SigninInput = styled(GeneralForm.Input)`
  color: #fff;
  font-size: 1rem;

  height: 50px;
  padding: 16px 20px;

  background-color: ${colors.textDarkGrey};
  border: 0;
  /* border-bottom: ${inputErrorBorderBottom}; */
  border-bottom: ${({ inputError }) =>
    inputError ? inputErrorBorderBottom : null};
  border-radius: 4px;
  margin-bottom: 0;
`

const InputError = styled.p`
  font-size: 0.8125rem;
  color: ${colors.errTextOrange};
  padding: 6px 3px 0;
`

const SignUpText = styled.p`
  color: ${colors.textMedGrey};
  margin-top: 2em;
`

const SignUpLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`

const ReCaptchaText = styled.p`
  font-size: 0.8125rem;
  color: ${colors.textLightGrey};

  margin-top: 1em;
`
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
            <SignInContentBody>
              <SignInFormContainer>
                <FormTitle>Sign In</FormTitle>
                <GeneralForm>
                  {state.firebaseError && (
                    <FirebaseErrorDisplay>
                      {state.firebaseError}
                    </FirebaseErrorDisplay>
                  )}
                  <InputWrapper>
                    <SigninInput
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
                      <InputError>Please enter a valid email.</InputError>
                    )}
                  </InputWrapper>

                  <InputWrapper>
                    <SigninInput
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
                      <InputError>
                        Your password must contain at least 6 characters.
                      </InputError>
                    )}
                  </InputWrapper>

                  <SubmitButton maxWidth='100%' boldText onClick={handleSubmit}>
                    Sign In
                  </SubmitButton>
                </GeneralForm>
              </SignInFormContainer>
              <SignUpText>
                New to Netflix? <SignUpLink href={HOME}>Sign up now</SignUpLink>
                .
              </SignUpText>
              <ReCaptchaText>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </ReCaptchaText>
            </SignInContentBody>
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
