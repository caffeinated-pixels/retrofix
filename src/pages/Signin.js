import styled from 'styled-components'
import { Header, Footer } from '../parts/'
import { MainContainer } from '../containers/'
import { GeneralForm, SubmitButton } from '../components'
import { colors } from '../styles/style-constants'
import { SIGN_UP } from '../constants/routes'
import { footerHomeRegistration } from '../fixtures/footer-content'

const SignInContentBody = styled.div`
  width: 100%;
  min-height: 550px;
  padding: 20px 5% 30px;

  border-radius: 4px;
`

const SignInFormContainer = styled.div``

const FormTitle = styled.h1`
  margin-bottom: 28px;
`

// take and modify CSS for GeneralForm.Input rather than passing down excessive props
const SigninInput = styled(GeneralForm.Input)`
  color: #fff;
  font-size: 1rem;

  padding: 16px 20px;
  margin-bottom: 16px;

  background-color: ${colors.textDarkGrey};
  border: 0;
  border-radius: 4px;
`

const SignUpText = styled.p``

const SignUpLink = styled.a``

const ReCaptchaText = styled.p``

export default function Signin() {
  return (
    <>
      <Header noBgOnMobile>
        <MainContainer>
          <SignInContentBody>
            <SignInFormContainer>
              <FormTitle>Sign In</FormTitle>
              <GeneralForm>
                <SigninInput
                  id='signin-email'
                  type='email'
                  placeholder='Email'
                />
                <GeneralForm.HiddenLabel htmlFor='signin-email'>
                  Email Address
                </GeneralForm.HiddenLabel>

                <SigninInput
                  id='signin-password'
                  type='password'
                  placeholder='Password'
                />
                <GeneralForm.HiddenLabel htmlFor='signin-password'>
                  Password
                </GeneralForm.HiddenLabel>
                <SubmitButton maxWidth='440px' boldText>
                  Sign In
                </SubmitButton>
              </GeneralForm>
            </SignInFormContainer>
            <SignUpText>
              New to Netflix?
              <SignUpLink href={SIGN_UP}>Sign up now.</SignUpLink>
            </SignUpText>
            <ReCaptchaText>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </ReCaptchaText>
          </SignInContentBody>
        </MainContainer>
      </Header>

      <Footer footerContent={footerHomeRegistration} borderTop={true} />
    </>
  )
}
