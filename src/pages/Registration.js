import styled from 'styled-components'
import { PageContainer, RegNavbar } from '../parts'
import { SiteLogo, NavLink } from '../components'
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

export default function Registration() {
  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar>
        <LogoWrapper>
          <SiteLogo />
        </LogoWrapper>
        <NavLink href={SIGN_IN}>Sign In</NavLink>
      </RegNavbar>
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
