import styled from 'styled-components'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #e6e6e6;

  /* @media (min-width: 550px) {
    margin: 0 45px;
  } */
`
export default function Navbar({ children, ...restProps }) {
  return <NavContainer {...restProps}>{children}</NavContainer>
}
