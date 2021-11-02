import styled from 'styled-components'
import { LinkButton, SiteLogo } from '../components'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.75em;
  margin: 0 5%;
`
export default function Navbar() {
  return (
    <NavContainer>
      <SiteLogo src='./images/misc/logo.svg' alt='Netflix logo' />
      <LinkButton href='/signin'>Sign In</LinkButton>
    </NavContainer>
  )
}
