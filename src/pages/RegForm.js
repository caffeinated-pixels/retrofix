import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignUpContext } from '../context/SignUpContext'
import { RegNavbar, Footer } from '../parts'
import {
  PageContainer,
  StepHeaderContainer,
  RegContentContainer,
  RegFormContainer,
} from '../containers'
import {
  StepIndicator,
  GeneralForm,
  StepTitle,
  RegFormText,
  SubmitButton,
  NavLink,
} from '../components'

import { colors } from '../styles/style-constants'
import { footerHomeRegistration } from '../fixtures/footer-content'
import { SIGN_UP, SIGN_IN } from '../constants/routes'

export default function RegForm() {
  const {
    globalFirstName,
    setGlobalFirstName,
    globalEmail,
    setGlobalEmail,
    globalPassword,
    setGlobalPassword,
  } = useContext(SignUpContext)

  const [firstName, setFirstName] = useState(globalFirstName)
  const [email, setEmail] = useState(globalEmail)
  const [password, setPassword] = useState(globalPassword)

  const navigate = useNavigate()

  const nextPage = () => {
    setGlobalFirstName(firstName)
    setGlobalEmail(email)
    setGlobalPassword(password)
    navigate(SIGN_UP)
  }

  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar>
        <NavLink href={SIGN_IN}>Sign In</NavLink>
      </RegNavbar>
      <RegContentContainer>
        <RegFormContainer>
          <StepHeaderContainer>
            <StepIndicator currentStep='1' />
            <StepTitle>Create a password to start your membership</StepTitle>
          </StepHeaderContainer>

          <RegFormText>Just a few more steps and you're done!</RegFormText>
          <RegFormText>We hate paperwork, too.</RegFormText>
          <GeneralForm>
            <GeneralForm.Input
              id='name'
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <GeneralForm.HiddenLabel htmlFor='name'>
              First Name
            </GeneralForm.HiddenLabel>

            <GeneralForm.Input
              id='email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <GeneralForm.HiddenLabel htmlFor='email'>
              Email Address
            </GeneralForm.HiddenLabel>

            <GeneralForm.Input
              id='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <GeneralForm.HiddenLabel htmlFor='password'>
              Password
            </GeneralForm.HiddenLabel>

            <GeneralForm.CheckboxWrapper>
              <GeneralForm.Checkbox id='offers' type='checkbox' />
              <GeneralForm.Label htmlFor='offers'>
                Please do not email me NetFlix special offers
              </GeneralForm.Label>
            </GeneralForm.CheckboxWrapper>

            <SubmitButton onClick={nextPage} maxWidth='440px'>
              Next
            </SubmitButton>
          </GeneralForm>
        </RegFormContainer>
      </RegContentContainer>
      <Footer
        footerContent={footerHomeRegistration}
        bgColor={colors.bgLightGrey}
        borderTop={colors.borderLightGrey}
      />
    </PageContainer>
  )
}
