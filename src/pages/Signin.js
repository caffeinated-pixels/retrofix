import { useState } from 'react'
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

export default function Signin() {
  // TODO: refactor multiple states with useReducer?
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputError, setInputError] = useState(false)
  const [firebaseError, setFirebaseError] = useState('')

  const navigate = useNavigate()

  const isEmailLongEnough = email.length < 5
  const isPasswordLongEnough = password.length < 6

  const emailError = inputError && isEmailLongEnough
  const passwordError = inputError && isPasswordLongEnough

  const processFirebaseError = (errorMsg) => {
    const isEmailError = /user-not-found/.test(errorMsg)
    const isPasswordError = /wrong-password/.test(errorMsg)

    if (isEmailError) {
      setFirebaseError(
        `Sorry, we can't find an account with this email address. Please try again`
      )
    }

    if (isPasswordError) {
      setFirebaseError(`Incorrect password. Please try again`)
    }
  }

  const contactFirebase = async () => {
    const firebaseResponse = await firebaseSignIn(email.trim(), password.trim())
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
      setInputError(true)
    } else {
      setInputError(false)
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
                  {firebaseError && (
                    <FirebaseErrorDisplay>{firebaseError}</FirebaseErrorDisplay>
                  )}
                  <InputWrapper>
                    <SigninInput
                      id='signin-email'
                      type='email'
                      placeholder='Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
