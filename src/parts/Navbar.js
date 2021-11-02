import styled from 'styled-components'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.75em;
  margin: 0 5%;
`

const Logo = styled.img`
  height: 1.5rem;
`

const SiginBtn = styled.a`
  text-decoration: none;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : '#F42F34')};
  color: #fff;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
`

export default function Navbar() {
  return (
    <NavContainer>
      <Logo src='./images/misc/logo.svg' alt='Netflix logo' />
      <SiginBtn href='/signin'>Sign In</SiginBtn>
    </NavContainer>
  )
}
