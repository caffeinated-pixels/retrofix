import styled from 'styled-components'
import { PageContainer, RegNavbar, Footer } from '../parts'
import { SiteLogo, NavLink } from '../components'
import { footerHomeRegistration } from '../fixtures/footer-content'
import { SIGN_IN } from '../constants/routes'
import { colors } from '../styles/style-constants'

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
`
const CenterContainer = styled.div``

const RegContainer = styled.div``

const StepLogoContainer = styled.div`
  width: 260px;
  height: 90px;

  background-image: url('../images/misc/reg-devices.png');
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-size: 260px;
`

const StepHeaderContainer = styled.div``

const StepIndicator = styled.p`
  text-transform: uppercase;
`
const StepTitle = styled.h1``

const ContextBody = styled.p``

const SubmitButtonContainer = styled.div``

const SubmitButton = styled.button`
  width: 100%;
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
              <StepIndicator>step 1 of 3</StepIndicator>
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
      <Footer footerContent={footerHomeRegistration} />
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
