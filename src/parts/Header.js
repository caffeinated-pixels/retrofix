import styled from 'styled-components'
import colors from '../styles/colors'
import { LinkButton, SiteLogo } from '../components'

const HeaderContainer = styled.section`
  width: 100%;
  max-width: 950px;
  border-bottom: 8px solid #222;
  background-image: url('../images/misc/home-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top left;
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.75em;
  margin: 0 5%;
`

const FeatureWrapper = styled.div`
  text-align: center;
  padding: 50px 5%;
`

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.1;
`

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  max-width: 640px;
  margin: 1rem auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const FormText = styled.h3`
  padding: 0 5%;
  max-width: 450px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.25;
`

const EmailForm = styled.div`
  display: flex;
  flex-direction: column;
`
const EmailInput = styled.input`
  margin: 10px auto;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border: 1px solid #8c8c8c;
  font-size: 0.875rem;
`
const EmailLabel = styled.label`
  height: 0;
`

const EmailSubmit = styled.button`
  background-color: ${colors.netflixRed};
  color: #fff;
  border: 0;
  margin: 0.25em auto;
  padding: 0 1em;
  min-height: 40px;
  min-width: 74px;
  letter-spacing: 0.1px;
  line-height: initial;
  cursor: pointer;
`
export default function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <SiteLogo src='./images/misc/logo.svg' alt='Netflix logo' />
        <LinkButton href='/signin'>Sign In</LinkButton>
      </NavContainer>
      <FeatureWrapper>
        <Title>Unlimited movies, TV shows, and more.</Title>
        <Subtitle>Watch anywhere. Cancel anytime.</Subtitle>
        <Form>
          <FormText>
            Ready to watch? Enter your email to create or restart your
            membership.
          </FormText>
          <EmailForm>
            <EmailInput
              id='email-input'
              type='email'
              placeholder='Email address'
            />
            <EmailLabel for='email-input'>Email address</EmailLabel>
            <EmailSubmit>Get Started</EmailSubmit>
          </EmailForm>
        </Form>
      </FeatureWrapper>
    </HeaderContainer>
  )
}
