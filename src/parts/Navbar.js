import styled from 'styled-components'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1.75em 5% 0;
  max-width: 1920px;

  @media (min-width: 550px) {
    padding: 1.75em 45px 0;
  }

  @media (min-width: 950px) {
    padding: 1.75em 3.5rem 0;
  }
`
export default function Navbar({ children, ...restProps }) {
  return <NavContainer {...restProps}>{children}</NavContainer>
}
