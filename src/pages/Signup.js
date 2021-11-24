import { RegNavbar, Footer } from '../parts'
import {
  PageContainer,
  StepHeaderContainer,
  StepLogoContainer,
  RegContentContainer,
  RegContainer,
  RegContextBody,
} from '../containers'
import {
  StepCheckmarkLogo,
  StepIndicator,
  StepTitle,
  RegParagraph,
  SubmitButton,
} from '../components'
import { footerHomeRegistration } from '../fixtures/footer-content'
import { REG_FORM } from '../constants/routes'
import { colors } from '../styles/style-constants'

export default function Registration() {
  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar />
      <RegContentContainer>
        <RegContainer>
          <StepLogoContainer>
            <StepCheckmarkLogo />
          </StepLogoContainer>

          <StepHeaderContainer>
            <StepIndicator currentStep='2' />
            <StepTitle>Choose your plan.</StepTitle>
          </StepHeaderContainer>
          <RegContextBody>
            <RegParagraph>
              Netflix is personalized for you. Create a password to watch on any
              device at any time.
            </RegParagraph>
          </RegContextBody>
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
