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
  StepCheckmarkLogo,
  StepIndicator,
  StepTitle,
  RegList,
  SubmitButton,
  NavLink,
} from '../components'
import { footerHomeRegistration } from '../fixtures/footer-content'
import { PLAN_FORM, SIGN_IN } from '../constants/routes'
import { colors } from '../styles/style-constants'

export default function Registration() {
  const navigate = useNavigate()

  const nextPage = () => {
    navigate(PLAN_FORM)
  }

  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar>
        <NavLink to={SIGN_IN}>Sign In</NavLink>
      </RegNavbar>
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
            <RegList>
              <RegList.Item>
                Our dark patterns mean cancelling is virtually impossible.
              </RegList.Item>
              <RegList.Item>
                Everything on RetroFix for one sky-high price.
              </RegList.Item>
              <RegList.Item>
                Highly-compressed and badly-upscaled content.
              </RegList.Item>
            </RegList>
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
