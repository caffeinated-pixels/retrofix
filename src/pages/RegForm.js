import styled from 'styled-components'
import {
  PageContainer,
  RegNavbar,
  RegContentContainer,
  StepHeaderContainer,
  Footer,
} from '../parts'
import { StepIndicator, StepTitle, SubmitButton } from '../components'

import { colors } from '../styles/style-constants'
import { footerHomeRegistration } from '../fixtures/footer-content'
import { PLAN_FORM } from '../constants/routes'

const RegFormContainer = styled.div`
  max-width: 440px;
  margin: 20px auto 0;
`

const GeneralForm = styled.form`
  margin: 10px 0 20px;
`

const RegFormText = styled.p`
  font-size: 1.1875rem;
`
const FormInput = styled.input`
  width: 100%;
  height: 60px;

  margin-bottom: 10px;
  padding: 0 10px;
`

const FormLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

export default function RegForm() {
  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar />
      <RegContentContainer>
        <RegFormContainer>
          <StepHeaderContainer>
            <StepIndicator currentStep='1' />
            <StepTitle>Create a password to start your membership</StepTitle>
          </StepHeaderContainer>

          <RegFormText>Just a few more steps and you're done!</RegFormText>
          <RegFormText>We hate paperwork, too.</RegFormText>
          <GeneralForm>
            <FormInput id='name' type='text' placeholder='First Name' />
            <FormLabel htmlFor='name'>First Name</FormLabel>

            <FormInput id='email' type='email' placeholder='Email' />
            <FormLabel htmlFor='email'>Email Address</FormLabel>

            <FormInput id='password' type='password' placeholder='Password' />
            <FormLabel htmlFor='password'>Password</FormLabel>

            <SubmitButton route={PLAN_FORM}>Next</SubmitButton>
          </GeneralForm>
        </RegFormContainer>
      </RegContentContainer>
      <Footer
        footerContent={footerHomeRegistration}
        bgColor={colors.bgLightGrey}
        borderTop={true}
      />
    </PageContainer>
  )
}

/* 
PageContainer
  RegNavbar
  RegContentContainer (centerContainer)
    RegForm
      firstname
      email
      password
      checkbox
      submit button

  Footer



*/
