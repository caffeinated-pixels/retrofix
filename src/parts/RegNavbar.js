import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SiteLogo } from '../components'
import { HOME } from '../constants/routes'
import { colors } from '../styles/style-constants'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 45px;

  border-bottom: ${({ noBorder }) =>
    noBorder ? '' : `1px solid ${colors.borderLightGrey}`};

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

const LogoLink = styled(Link)``

export default function RegNavbar({ children, noBorder }) {
  return (
    <NavContainer noBorder={noBorder}>
      <LogoWrapper>
        <LogoLink to={HOME}>
          <SiteLogo />
        </LogoLink>
      </LogoWrapper>
      {children}
    </NavContainer>
  )
}
