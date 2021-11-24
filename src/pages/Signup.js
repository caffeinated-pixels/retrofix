import styled from 'styled-components'
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
  SubmitButton,
} from '../components'
import { footerHomeRegistration } from '../fixtures/footer-content'
import { REG_FORM } from '../constants/routes'
import { colors } from '../styles/style-constants'

const RegList = styled.ul`
  margin: 25px 0 44px;
  font-size: 1.0625rem;
  padding-left: 1.2em;
`

const RegListItem = styled.li`
  padding-left: 0.75em;
  text-align: left;

  &::marker {
    color: red;
    content: '\f00c';
    font-size: 1.5rem;
    font-family: 'Font Awesome 5 Free';
    font-weight: 700;
  }

  & + & {
    margin-top: 20px;
  }
`

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
            <RegList>
              <RegListItem>No commitments, cancel anytime.</RegListItem>
              <RegListItem>
                Everything on Netflix for one low price.
              </RegListItem>
              <RegListItem>Unlimited viewing on all your devices.</RegListItem>
            </RegList>
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
