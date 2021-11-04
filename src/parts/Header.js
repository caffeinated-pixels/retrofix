import styled from 'styled-components'
import Navbar from './Navbar'
import { LinkButton, SiteLogo, GetStartedForm } from '../components'
import { cardBorderBottom } from '../styles/style-constants'

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 950px;
  border-bottom: ${cardBorderBottom};
  background-image: url('../images/misc/home-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top left;
`
const FeatureWrapper = styled.div`
  text-align: center;
  padding: 65px 5%;
`

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.1;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  max-width: 640px;
  margin: 1rem auto;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Navbar>
        <SiteLogo src='./images/misc/logo.svg' alt='Netflix logo' />
        <LinkButton href='/signin'>Sign In</LinkButton>
      </Navbar>
      <FeatureWrapper>
        <Title>Unlimited movies, TV shows, and more.</Title>
        <Subtitle>Watch anywhere. Cancel anytime.</Subtitle>
        <GetStartedForm />
      </FeatureWrapper>
    </HeaderContainer>
  )
}
