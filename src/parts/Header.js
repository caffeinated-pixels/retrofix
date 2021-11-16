import styled from 'styled-components'
import { Navbar } from './'
import { LinkButton, SiteLogo, GetStartedForm } from '../components'
import { cardBorderBottom } from '../styles/style-constants'

const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: ${cardBorderBottom};
  background-image: url('../images/misc/home-bg-large.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
const ImageGradient = styled.div`
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`

const FeatureWrapper = styled.div`
  text-align: center;
  padding: 65px 5%;
  max-width: 950px;
  margin: 0 auto;

  @media (min-width: 550px) {
    padding: 145px 45px; // 75px + 70px on Netflix
  }

  @media (min-width: 950px) {
    padding: 145px 0;
  }
`

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.1;

  @media (min-width: 550px) {
    font-size: 3.125rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  max-width: 640px;
  margin: 1rem auto;

  @media (min-width: 550px) {
    font-size: 1.625rem;
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <ImageGradient>
        <Navbar>
          <SiteLogo src='./images/misc/logo.svg' alt='Netflix logo' />
          <LinkButton href='/signin'>Sign In</LinkButton>
        </Navbar>
        <FeatureWrapper>
          <Title>Unlimited movies, TV shows, and more.</Title>
          <Subtitle>Watch anywhere. Cancel anytime.</Subtitle>
          <GetStartedForm />
        </FeatureWrapper>
      </ImageGradient>
    </HeaderContainer>
  )
}
