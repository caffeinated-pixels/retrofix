import styled from 'styled-components'
import {
  PageContainer,
  RegNavbar,
  RegContentContainer,
  StepHeaderContainer,
  Footer,
} from '../parts'
import { StepIndicator, StepTitle, SubmitButton } from '../components'
import { footerHomeRegistration } from '../fixtures/footer-content'
import { REG_FORM } from '../constants/routes'
import { colors } from '../styles/style-constants'

const RegContainer = styled.div`
  max-width: 340px;
  margin: 0 auto 0;

  @media (min-width: 600px) {
    text-align: center;
  }
`

const StepLogoContainer = styled.div`
  width: 260px;
  height: 90px;
  margin: 30% auto 20px;
  display: inline-block;

  background-image: url('../images/misc/reg-devices.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 260px;
`

const ContextBody = styled.p`
  font-size: 1.0625rem;
  max-width: 300px;

  @media (min-width: 600px) {
    margin: 0 auto;
  }
`

export default function Registration() {
  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar />
      <RegContentContainer>
        <RegContainer>
          <StepLogoContainer />
          <StepHeaderContainer>
            <StepIndicator currentStep='1' />
            <StepTitle>Finish setting up your account</StepTitle>
          </StepHeaderContainer>
          <ContextBody>
            Netflix is personalized for you. Create a password to watch on any
            device at any time.
          </ContextBody>
        </RegContainer>

        <SubmitButton route={REG_FORM}>Next</SubmitButton>
      </RegContentContainer>
      <Footer
        footerContent={footerHomeRegistration}
        bgColor={colors.bgLightGrey}
        borderTop={true}
      />
    </PageContainer>
  )
}
