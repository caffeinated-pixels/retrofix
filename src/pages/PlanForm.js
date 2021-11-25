import styled from 'styled-components'
import { RegNavbar, PlanFormTable, Footer } from '../parts'
import {
  PageContainer,
  StepHeaderContainer,
  RegContentContainer,
  RegContextBody,
} from '../containers'
import { StepIndicator, StepTitle, RegList, SubmitButton } from '../components'
import { footerHomeRegistration } from '../fixtures/footer-content'
import { PLAN_FORM } from '../constants/routes'
import { colors } from '../styles/style-constants'

const RegContainerPlanForm = styled.div``

export default function Registration() {
  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar />
      <RegContentContainer>
        <RegContainerPlanForm>
          <StepHeaderContainer>
            <StepIndicator currentStep='2' />
            <StepTitle>Choose the plan that’s right for you</StepTitle>
          </StepHeaderContainer>
          <RegContextBody regForm={true}>
            <RegList planform>
              <RegList.Item planform>Watch all you want. Ad-free.</RegList.Item>
              <RegList.Item planform>
                Recommendations just for you.
              </RegList.Item>
              <RegList.Item planform>
                Change or cancel your plan anytime.
              </RegList.Item>
            </RegList>
          </RegContextBody>
        </RegContainerPlanForm>
        <PlanFormTable />
        <SubmitButton route={PLAN_FORM}>Complete Registration</SubmitButton>
      </RegContentContainer>
      <Footer
        footerContent={footerHomeRegistration}
        bgColor={colors.bgLightGrey}
        borderTop={true}
      />
    </PageContainer>
  )
}
