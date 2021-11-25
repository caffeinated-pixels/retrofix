import { RegNavbar, PlanFormTable, Footer } from '../parts'
import {
  PageContainer,
  StepHeaderContainer,
  RegContentContainer,
  RegContainer,
  RegContextBody,
} from '../containers'
import { StepIndicator, StepTitle, RegList, SubmitButton } from '../components'
import { footerHomeRegistration } from '../fixtures/footer-content'
import { PLAN_FORM } from '../constants/routes'
import { colors } from '../styles/style-constants'

export default function Registration() {
  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar />
      <RegContentContainer>
        <RegContainer>
          <StepHeaderContainer>
            <StepIndicator currentStep='2' />
            <StepTitle>Choose the plan that’s right for you</StepTitle>
          </StepHeaderContainer>
          <RegContextBody>
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
        </RegContainer>
        <PlanFormTable />
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
