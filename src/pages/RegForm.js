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

export default function RegForm() {
  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar />
      <RegContentContainer>
        <StepHeaderContainer>
          <StepIndicator currentStep='2' />
          <StepTitle>Create a password to start your membership</StepTitle>
        </StepHeaderContainer>
        <p>Just a few more steps and you're done!</p>
        <p>We hate paperwork, too.</p>
        <SubmitButton route={PLAN_FORM}>Next</SubmitButton>
      </RegContentContainer>
      <Footer
        footerContent={footerHomeRegistration}
        bgColor={colors.bgLightGrey}
        borderTop={true}
      />
    </PageContainer>
  )
}
