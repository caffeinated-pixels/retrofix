import styled from 'styled-components'
import {
  PageContainer,
  RegNavbar,
  RegContentContainer,
  StepHeaderContainer,
  Footer,
} from '../parts'
import {
  StepLogoContainer,
  StepIndicator,
  StepTitle,
  RegParagraph,
  SubmitButton,
} from '../components'
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

export default function Registration() {
  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar />
      <RegContentContainer>
        <RegContainer>
          <StepLogoContainer bgImage='../images/misc/reg-devices.png' />
          <StepHeaderContainer>
            <StepIndicator currentStep='1' />
            <StepTitle>Finish setting up your account</StepTitle>
          </StepHeaderContainer>
          <RegParagraph>
            Netflix is personalized for you. Create a password to watch on any
            device at any time.
          </RegParagraph>
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
