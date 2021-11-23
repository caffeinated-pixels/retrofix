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

const RegFormContainer = styled.div``

const GeneralForm = styled.form``

const RegFormText = styled.p`
  font-size: 1.1875rem;
`
const FormInput = styled.input``

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
          <GeneralForm>
            <RegFormText>Just a few more steps and you're done!</RegFormText>
            <RegFormText>We hate paperwork, too.</RegFormText>

            <FormInput
              id='name-input'
              type='text'
              placeholder='First Name'
            ></FormInput>
            <FormLabel htmlFor='name-input'>First Name</FormLabel>

            <FormInput
              id='email-input'
              type='email'
              placeholder='Email'
            ></FormInput>
            <FormLabel htmlFor='email-input'>Email Address</FormLabel>

            <FormInput
              id='password-input'
              type='password'
              placeholder='Password'
            ></FormInput>
            <FormLabel htmlFor='password-input'>Password</FormLabel>

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
