import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useSignUpContext } from '../context/SignUpContext'
import firebaseRegistration from '../firebase/firebaseRegistration'
import { RegNavbar, PlanFormTable, Footer } from '../parts'
import {
  PageContainer,
  StepHeaderContainer,
  RegContentContainer,
  RegContextBody,
} from '../containers'
import {
  StepIndicator,
  StepTitle,
  RegList,
  SubmitButton,
  NavLink,
} from '../components'
import { footerHomeRegistration } from '../fixtures/footer-content'
import { PLAN_FORM, SIGN_IN, PROFILE, REG_FORM } from '../constants/routes'
import { colors } from '../styles/style-constants'

const RegContainerPlanForm = styled.div``

export default function Registration() {
  const { globalFirstName, globalEmail, globalPassword } = useSignUpContext()
  const navigate = useNavigate()

  const completeRegistration = async () => {
    const user = await firebaseRegistration(
      globalFirstName,
      globalEmail,
      globalPassword
    )

    if (user?.email) {
      navigate(PROFILE)
    } else {
      navigate(REG_FORM)
    }
  }

  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar>
        <NavLink to={SIGN_IN}>Sign In</NavLink>
      </RegNavbar>
      <RegContentContainer>
        <RegContainerPlanForm>
          <StepHeaderContainer>
            <StepIndicator currentStep='2' />
            <StepTitle>Choose the plan that's right for you</StepTitle>
          </StepHeaderContainer>
          <RegContextBody regForm={true}>
            <RegList planform>
              <RegList.Item planform>
                Content that's literally unwatchable.
              </RegList.Item>
              <RegList.Item planform>
                Recommendations based on someone else's tastes.
              </RegList.Item>
              <RegList.Item planform>
                None of these plans are real!
              </RegList.Item>
            </RegList>
          </RegContextBody>
        </RegContainerPlanForm>
        <PlanFormTable />
        <SubmitButton
          route={PLAN_FORM}
          maxWidth='440px'
          onClick={completeRegistration}
        >
          Complete Registration
        </SubmitButton>
      </RegContentContainer>
      <Footer
        footerContent={footerHomeRegistration}
        bgColor={colors.bgLightGrey}
        borderTop={colors.borderLightGrey}
      />
    </PageContainer>
  )
}
