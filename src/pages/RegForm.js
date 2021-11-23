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

  font-size: 0.875rem;

  @media (min-width: 740px) {
    font-size: 1rem;
  }
`

const FormHiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`

const FormCheckbox = styled.input`
  margin: 0 10px 0 0;
  flex-shrink: 0;
  height: 32px;
  width: 32px;
`

const FormLabel = styled.label``

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
            <FormHiddenLabel htmlFor='name'>First Name</FormHiddenLabel>

            <FormInput id='email' type='email' placeholder='Email' />
            <FormHiddenLabel htmlFor='email'>Email Address</FormHiddenLabel>

            <FormInput id='password' type='password' placeholder='Password' />
            <FormHiddenLabel htmlFor='password'>Password</FormHiddenLabel>

            <CheckboxWrapper>
              <FormCheckbox id='offers' type='checkbox' />
              <FormLabel htmlFor='offers'>
                Please do not email me NetFlix special offers
              </FormLabel>
            </CheckboxWrapper>

            <SubmitButton route={PLAN_FORM} maxWidth='440px'>
              Next
            </SubmitButton>
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
