import { useState } from 'react'
import styled from 'styled-components'
import firebaseSignIn from '../firebase/firebaseSignIn'
import { Header, RegNavbar, Footer } from '../parts/'
import { SemanticHeader, MainContainer } from '../containers/'
import { GeneralForm, SubmitButton } from '../components'
import { colors } from '../styles/style-constants'
import { HOME } from '../constants/routes'
import { footerHomeRegistration } from '../fixtures/footer-content'

const SignInContentBody = styled.div`
  width: 100%;
  min-height: 550px;
  padding: 20px 5% 30px;

  border-radius: 4px;

  @media (min-width: 750px) {
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

// take and modify CSS for GeneralForm.Input rather than passing down excessive props
const SigninInput = styled(GeneralForm.Input)`
  color: #fff;
  font-size: 1rem;

  height: 50px;
  padding: 16px 20px;
  margin-bottom: 16px;

  background-color: ${colors.textDarkGrey};
  border: 0;
  border-radius: 4px;
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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()

    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()

    firebaseSignIn(trimmedEmail, trimmedPassword)
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
                  <SigninInput
                    id='signin-email'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <GeneralForm.HiddenLabel htmlFor='signin-email'>
                    Email Address
                  </GeneralForm.HiddenLabel>

                  <SigninInput
                    id='signin-password'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <GeneralForm.HiddenLabel htmlFor='signin-password'>
                    Password
                  </GeneralForm.HiddenLabel>
                  <SubmitButton maxWidth='100%' boldText onClick={signIn}>
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
