import styled from 'styled-components'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.75em;
  margin: 0 5%;
`
export default function Navbar({ children, ...restProps }) {
  return <NavContainer {...restProps}>{children}</NavContainer>
}
