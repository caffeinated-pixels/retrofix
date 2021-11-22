import styled from 'styled-components'
import { PageContainer, RegNavbar, Footer } from '../parts'
import { SiteLogo, NavLink } from '../components'
import { footerHomeRegistration } from '../fixtures/footer-content'
import { SIGN_IN } from '../constants/routes'
import { colors, focusOutline } from '../styles/style-constants'

const LogoWrapper = styled.div`
  width: 75px;
  height: 20px;
  margin-left: 3%;

  /* @media (min-width: 550px) {
    width: 6.75rem;
    height: 2rem;
  }

  @media (min-width: 950px) {
    width: 8.375rem;
    height: 2.25rem;
  }

  @media (min-width: 1450px) {
    width: 10.4375rem;
    height: 2.8125rem;
  } */
`

const SimpleContainer = styled.main`
  flex-grow: 1;
  overflow: hidden;
  padding-bottom: 95px;
  letter-spacing: 0.2px;
`
const CenterContainer = styled.div`
  padding: 20px 32px 60px;
  margin: 0 auto 15px;
  max-width: 978px;
`

const RegContainer = styled.div`
  max-width: 340px;
  margin: 0 auto 0;
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

const StepHeaderContainer = styled.div``

const StepIndicator = styled.p`
  text-transform: uppercase;
  font-size: 0.8125rem;
`
const BoldText = styled.b``

const StepTitle = styled.h1`
  font-size: 1.4375rem;
  margin: 0.2em 0 0.4em;
`

const ContextBody = styled.p`
  font-size: 1.0625rem;
`

const SubmitButtonContainer = styled.div`
  max-width: 340px;
  margin-top: 24px;
`

const SubmitButton = styled.button`
  width: 100%;
  min-height: 48px;
  background-color: ${colors.netflixRed};
  border: none;
  cursor: pointer;

  color: #fff;
  font-size: 1.0625rem;
  letter-spacing: 0.025rem;

  border-radius: 2px;

  &:hover,
  &:focus-visible {
    background-color: ${colors.netflixRedFocus};
  }

  &:focus-visible {
    outline: ${focusOutline};
  }
`

export default function Registration() {
  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar>
        <LogoWrapper>
          <SiteLogo />
        </LogoWrapper>
        <NavLink href={SIGN_IN}>Sign In</NavLink>
      </RegNavbar>
      <SimpleContainer>
        <CenterContainer>
          <RegContainer>
            <StepLogoContainer />
            <StepHeaderContainer>
              <StepIndicator>
                step <BoldText>1</BoldText> of <BoldText>3</BoldText>
              </StepIndicator>
              <StepTitle>Finish setting up your account</StepTitle>
            </StepHeaderContainer>
            <ContextBody>
              Netflix is personalized for you. Create a password to watch on any
              device at any time.
            </ContextBody>
          </RegContainer>
          <SubmitButtonContainer>
            <SubmitButton>Next</SubmitButton>
          </SubmitButtonContainer>
        </CenterContainer>
      </SimpleContainer>
      <Footer
        footerContent={footerHomeRegistration}
        bgColor={colors.bgLightGrey}
        borderTop={true}
      />
    </PageContainer>
  )
}

/* 
header
  logo
  Sign In link

main
  image
  text
  buttion

footer


*/
