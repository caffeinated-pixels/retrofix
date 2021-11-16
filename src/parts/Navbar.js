import styled from 'styled-components'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.75em;
  margin: 0 5%;
  max-width: 1920px;

  @media (min-width: 550px) {
    margin: 0 45px;
  }

  @media (min-width: 1920px) {
    margin: 0 auto;
  }
`
export default function Navbar({ children, ...restProps }) {
  return <NavContainer {...restProps}>{children}</NavContainer>
}
