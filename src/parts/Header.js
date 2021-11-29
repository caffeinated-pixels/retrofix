import styled from 'styled-components'
import { Navbar } from './'
import { LinkButton, SiteLogo } from '../components'
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

const LogoWrapper = styled.div`
  width: 5.5rem;
  height: 1.5rem;

  @media (min-width: 550px) {
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
  }
`
export default function Header({ hasBtn, children }) {
  return (
    <HeaderContainer>
      <ImageGradient>
        <Navbar>
          <LogoWrapper>
            <SiteLogo />
          </LogoWrapper>
          {hasBtn && <LinkButton href='/signin'>Sign In</LinkButton>}
        </Navbar>
        {children}
      </ImageGradient>
    </HeaderContainer>
  )
}
