import styled from 'styled-components'
import {
  PageContainer,
  RegNavbar,
  RegContentContainer,
  StepHeaderContainer,
  Footer,
} from '../parts'
import {
  StepIndicator,
  GeneralForm,
  StepTitle,
  SubmitButton,
} from '../components'

import { colors } from '../styles/style-constants'
import { footerHomeRegistration } from '../fixtures/footer-content'
import { PLAN_FORM } from '../constants/routes'

const RegFormContainer = styled.div`
  max-width: 440px;
  margin: 20px auto 0;
`

const RegFormText = styled.p`
  font-size: 1.1875rem;
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
            <GeneralForm.Input id='name' type='text' placeholder='First Name' />
            <GeneralForm.HiddenLabel htmlFor='name'>
              First Name
            </GeneralForm.HiddenLabel>

            <GeneralForm.Input id='email' type='email' placeholder='Email' />
            <GeneralForm.HiddenLabel htmlFor='email'>
              Email Address
            </GeneralForm.HiddenLabel>

            <GeneralForm.Input
              id='password'
              type='password'
              placeholder='Password'
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
