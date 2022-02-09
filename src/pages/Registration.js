import { useNavigate } from 'react-router-dom'
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
  StepDevicesLogo,
  StepIndicator,
  StepTitle,
  RegParagraph,
  SubmitButton,
  NavLink,
} from '../components'
import { footerHomeRegistration } from '../fixtures/footer-content'
import { REG_FORM, SIGN_IN } from '../constants/routes'
import { colors } from '../styles/style-constants'

export default function Registration() {
  const navigate = useNavigate()

  const nextPage = () => {
    navigate(REG_FORM)
  }

  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar>
        <NavLink to={SIGN_IN}>Sign In</NavLink>
      </RegNavbar>
      <RegContentContainer>
        <RegContainer>
          <StepLogoContainer>
            <StepDevicesLogo />
          </StepLogoContainer>
          <StepHeaderContainer>
            <StepIndicator currentStep='1' />
            <StepTitle>Finish setting up your account</StepTitle>
          </StepHeaderContainer>

          <RegContextBody>
            <RegParagraph>
              RetroFix uses the Firebase API for user authentication. You can
              also signin to RetroFix using the guest account.
            </RegParagraph>
          </RegContextBody>
        </RegContainer>

        <SubmitButton onClick={nextPage}>Next</SubmitButton>
      </RegContentContainer>
      <Footer
        footerContent={footerHomeRegistration}
        bgColor={colors.bgLightGrey}
        borderTop={colors.borderLightGrey}
      />
    </PageContainer>
  )
}
