import styled from 'styled-components'
import { SiteLogo } from '../components'
import { HOME } from '../constants/routes'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #e6e6e6;

  @media (min-width: 500px) {
    height: 75px;
  }

  @media (min-width: 740px) {
    height: 90px;
  }
`
const LogoWrapper = styled.div`
  width: 75px;
  height: 20px;
  margin-left: 3%;

  @media (min-width: 500px) {
    width: 167px;
    height: 45px;
  }
`

const LogoLink = styled.a``

export default function RegNavbar({ children }) {
  return (
    <NavContainer>
      <LogoWrapper>
        <LogoLink href={HOME}>
          <SiteLogo />
        </LogoLink>
      </LogoWrapper>
      {children}
      {/* <NavLink href={SIGN_IN}>Sign In</NavLink> */}
    </NavContainer>
  )
}
