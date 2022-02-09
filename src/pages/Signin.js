import { useNavigate } from 'react-router-dom'
import useFormValidation from '../hooks/useFormValidation'
import firebaseSignIn from '../firebase/firebaseSignIn'
import { Header, RegNavbar, Footer } from '../parts/'
import { SemanticHeader, MainContainer } from '../containers/'
import { GeneralForm, signinForm, SubmitButton } from '../components'
import isEmailValid from '../helpers/validate-email'
import { colors } from '../styles/style-constants'
import { HOME, PROFILE } from '../constants/routes'
import { footerHomeRegistration } from '../fixtures/footer-content'

export default function Signin() {
  const [state, dispatch] = useFormValidation()
  const navigate = useNavigate()

  const isEmailInvalid = !isEmailValid(state.email)
  const isPasswordTooShort = state.password.length < 6

  const emailError = state.inputError && isEmailInvalid
  const passwordError = state.inputError && isPasswordTooShort

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
      navigate(PROFILE, { replace: true }) // 2nd arg prevents browser back returning to signin page
    } else if (firebaseResponse.message) {
      processFirebaseError(firebaseResponse.message)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isEmailInvalid || isPasswordTooShort) {
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
            <signinForm.ContentBody>
              <signinForm.Container>
                <signinForm.Title>Sign In</signinForm.Title>
                <GeneralForm>
                  {state.firebaseError && (
                    <signinForm.FirebaseErrorDisplay>
                      {state.firebaseError}
                    </signinForm.FirebaseErrorDisplay>
                  )}
                  <signinForm.InputWrapper>
                    <signinForm.Input
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
                      <signinForm.InputError>
                        Please enter a valid email.
                      </signinForm.InputError>
                    )}
                  </signinForm.InputWrapper>

                  <signinForm.InputWrapper>
                    <signinForm.Input
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
                      <signinForm.InputError>
                        Your password must contain at least 6 characters.
                      </signinForm.InputError>
                    )}
                  </signinForm.InputWrapper>

                  <SubmitButton maxWidth='100%' boldText onClick={handleSubmit}>
                    Sign In
                  </SubmitButton>
                </GeneralForm>
              </signinForm.Container>
              <signinForm.Text>
                New to RetroFix?{' '}
                <signinForm.Link to={HOME}>Sign up now</signinForm.Link>.
              </signinForm.Text>
              <signinForm.ReCaptchaText>
                RetroFix uses the Firebase API for user accounts. If you don't
                want to create an account, please feel free to use the guest
                account. Email: guest@retrofix.com; password: password.
              </signinForm.ReCaptchaText>
            </signinForm.ContentBody>
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
