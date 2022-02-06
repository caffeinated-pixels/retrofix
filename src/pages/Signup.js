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
                Stay with us. Forever, and ever, and ever.
              </RegList.Item>
              <RegList.Item>
                Everything on RetroFix for more than you can afford.
              </RegList.Item>
              <RegList.Item>Awesome shows that you can't watch.</RegList.Item>
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
